import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import useUserStore from '../../store/useUserStore';
import { useTheme } from '../../hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DCHLongTextInput } from '../../components/Inputs/DCHLongTextInput';
import { Button } from '../../components/buttons/Button';
import { Buttons } from '../../theme/theme';
import { DCHText } from '../../components/Text';
import { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { DCHView } from '../../components/Views/DCHView';

const { width } = Dimensions.get('window');

type Question = {
  title: string;
  description: string;
  options?: string[];
  inputEnabled?: boolean;
  placeholder?: string;
};

type RenderItemType = {
  item: Question;
  index: number;
};

const skinCareQuestions: Question[] = [
  {
    title: 'Cilt Tipi',
    description:
      'Cildiniz yağlı mı, kuru mu, karma mı, hassas mı yoksa normal mi?',
    options: ['Yağlı', 'Kuru', 'Karma', 'Hassas', 'Normal'],
  },
  {
    title: 'Cilt Sorunları',
    description:
      'Akne, lekeler, kızarıklık, kuruluk veya diğer cilt sorunlarıyla ilgili endişeleriniz var mı?',
    options: ['Evet', 'Hayır'],
  },
  {
    title: 'Günlük Alışkanlıklar',
    description:
      'Makyaj kullanıyor musunuz? Kullanıyorsanız, makyaj temizleme alışkanlıklarınız neler?',
    options: ['Evet', 'Hayır'],
    inputEnabled: true,
    placeholder: 'Makyaj temizleme alışkanlıklarınızı yazın',
  },
  {
    title: 'Mevsimsel Etkiler',
    description:
      'Cildiniz mevsimsel değişikliklere nasıl tepki verir? Kışın ve yazın cilt bakım rutininizde değişiklik yapar mısınız?',
    options: ['Evet', 'Hayır'],
    inputEnabled: true,
    placeholder: 'Varsa mevsimsel etkileri yazınız',
  },
  {
    title: 'Ürün Toleransı',
    description:
      'Daha önce kullanmış olduğunuz cilt bakım ürünleri içinde alerjik reaksiyon veya tahrişe neden olan bir ürün var mı?',
    options: ['Evet', 'Hayır'],
    inputEnabled: true,
    placeholder: 'Varsa alerjik reaksiyona neden olan ürünleri yazınız',
  },
  {
    title: 'Yaş ve Genel Sağlık Durumu',
    description:
      'Cilt bakım rutininizi belirlerken yaşınız ve genel sağlık durumunuzun dikkate alınması önemlidir. Özellikle hamilelik veya bazı sağlık sorunları, kullanabileceğiniz ürünleri etkileyebilir.',
    options: ['Genç', 'Orta Yaşlı', 'Yaşlı'],
  },
  {
    title: 'Cilt Bakım Hedefleri',
    description:
      'Cilt bakımı ile ilgili belirli hedefleriniz nelerdir? Örneğin, yaşlanma karşıtı, nemlendirme, leke azaltma vb.',
    options: ['Yaşlanma Karşıtı', 'Nemlendirme', 'Leke Azaltma', 'Diğer'],
    inputEnabled: true,
    placeholder: 'Cilt bakım hedeflerinizi yazın',
  },
];

const ButtonFooter = ({
  pageIndex,
  setPageIndex,
  flatListRef,
  selectedOptions,
  inputValues,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  flatListRef: React.RefObject<FlatList>;
  selectedOptions: string[];
  inputValues: string[];
}) => {
  const handleBack = () => {
    if (pageIndex > 0) {
      setPageIndex((prevIndex) => prevIndex - 1);
      flatListRef.current?.scrollToOffset({
        offset: width * (pageIndex - 1),
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    // go to end
    setPageIndex(skinCareQuestions.length - 1);
    flatListRef.current?.scrollToOffset({
      offset: width * (skinCareQuestions.length - 1),
      animated: true,
    });
  };

  const handleNext = () => {
    if (selectedOptions[pageIndex]) {
      setPageIndex((prevIndex) => prevIndex + 1);
      flatListRef.current?.scrollToOffset({
        offset: width * (pageIndex + 1),
        animated: true,
      });
    } else {
      Alert.alert(
        'Lütfen bir seçim yapınız',
        'Bu soruyu geçmek için şıklardan birini seçmelisiniz.'
      );
    }
  };

  const handleFinish = () => {
    useUserStore.setState({
      onBoardingCompleted: true,
      isTermsAccepted: true,
    });
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        title='Geri'
        type={Buttons.critical}
        onPress={handleBack}
        disabled={pageIndex === 0}
      />
      <Button title='Geç' type={Buttons.secondary} onPress={handleSkip} />
      {pageIndex === skinCareQuestions.length - 1 ? (
        <Button
          type={Buttons.primary}
          title='Bitir'
          onPress={handleFinish}
          disabled={!selectedOptions[pageIndex]}
        />
      ) : (
        <Button
          type={Buttons.secondary}
          title='Devam'
          onPress={handleNext}
          disabled={
            pageIndex === skinCareQuestions.length - 1 &&
            !selectedOptions[pageIndex]
          }
        />
      )}
    </View>
  );
};

export const Onboarding = () => {
  const { TextTheme, ColorPallet } = useTheme();
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValues, setInputValues] = useState<string[]>(
    Array(skinCareQuestions.length).fill('')
  );
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item, index }: RenderItemType) => (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <View style={styles.innerContainer}>
        <View style={styles.questionContainer}>
          <View>
            <DCHText
              animated
              entering={FadeInUp.duration(1200)}
              style={[styles.questionText, TextTheme.headingOne]}
            >
              {item.title}
            </DCHText>
            <DCHText
              style={[styles.descriptionText, TextTheme.labelSubtitle]}
              animated
            >
              {item.description}
            </DCHText>
          </View>
          {item.options && (
            <View style={styles.optionsContainer}>
              {item.options.map((option, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={[
                    styles.optionButton,
                    {
                      backgroundColor:
                        selectedOptions[index] === option
                          ? ColorPallet.brand.secondary
                          : ColorPallet.grayscale.lightGrey,
                    },
                  ]}
                  onPress={() => {
                    const newSelectedOptions = [...selectedOptions];
                    newSelectedOptions[index] = option;
                    setSelectedOptions(newSelectedOptions);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      {
                        color:
                          selectedOptions[index] === option
                            ? ColorPallet.grayscale.white
                            : ColorPallet.brand.text,
                      },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {item.inputEnabled && (
            <DCHLongTextInput
              dark={false}
              placeholder={item.placeholder || 'Açıklayınız'}
              title={'Varsa lütfen açıklayınız'}
              onChangeText={(text) => {
                const newInputValues = [...inputValues];
                newInputValues[index] = text;
                setInputValues(newInputValues);
              }}
            />
          )}
        </View>
        <ButtonFooter
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          flatListRef={flatListRef}
          selectedOptions={selectedOptions}
          inputValues={inputValues}
        />
      </View>
    </SafeAreaView>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{ flex: 1 }}
      >
        <DCHView type={'primary'} blurLevel={5}>
          <FlatList
            ref={flatListRef}
            data={skinCareQuestions}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            scrollEnabled={false}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </DCHView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    width,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  questionText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionText: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 8,
  },
  optionText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  finishButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  finishButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
