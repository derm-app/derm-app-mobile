import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/buttons/Button';
import { Buttons } from '../../theme/theme';
import { DCHText } from '../../components/Text';
import { FadeInUp } from 'react-native-reanimated';
import { DCHView } from '../../components/Views/DCHView';
import { useOnboarding } from '../../api/onboarding';
import { useTheme } from '../../hooks/useTheme';
import useUserStore from '../../store/useUserStore';

const { width } = Dimensions.get('window');

type Question = {
  _id: string;
  questionTitle: string;
  question: string;
  answers: string[];
};

export const Onboarding = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { TextTheme, ColorPallet } = useTheme();
  const { getOnboardingQuestions } = useOnboarding();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getOnboardingQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching onboarding questions:', error);
        // Handle error as needed
      }
    };

    fetchQuestions();
  }, []);

  const handleNext = () => {
    if (selectedOption !== null) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null); // Clear selected option for the next question
      } else {
        useUserStore.setState({
          onBoardingCompleted: true,
          isTermsAccepted: true,
        });
      }
    } else {
      Alert.alert(
        'Please select an option',
        'You must select an option to proceed.'
      );
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Clear selected option for the previous question
    }
  };

  const renderItem = ({ item }: { item: Question; index: number }) => (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.questionContainer}>
          <DCHText style={[TextTheme.headingOneLight, { textAlign: 'center' }]}>
            {item.questionTitle}
          </DCHText>
          <DCHText
            style={[
              TextTheme.normalLight,
              { textAlign: 'center', marginVertical: 24 },
            ]}
          >
            {item.question}
          </DCHText>
          <View style={styles.optionsContainer}>
            {item.answers.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.optionButton,
                  {
                    backgroundColor:
                      selectedOption === option
                        ? ColorPallet.brand.primary
                        : ColorPallet.grayscale.white,
                  },
                ]}
                onPress={() => setSelectedOption(option)}
              >
                <DCHText
                  style={[
                    TextTheme.normalLight,
                    styles.optionText,
                    {
                      color:
                        selectedOption === option
                          ? ColorPallet.grayscale.white
                          : ColorPallet.brand.primary,
                    },
                  ]}
                >
                  {option}
                </DCHText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            type={Buttons.secondary}
            title='Back'
            onPress={handleBack}
            disabled={currentQuestionIndex === 0}
          />
          <Button
            type={Buttons.secondary}
            title='Next'
            onPress={handleNext}
            disabled={selectedOption === null}
          />
        </View>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, marginBottom: 24 }}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{ flex: 1 }}
      >
        <DCHView type={'primary'} blurLevel={5}>
          <FlatList
            data={questions}
            renderItem={({ item, index }) => {
              if (index === currentQuestionIndex) {
                return renderItem({ item, index });
              }
              return null;
            }}
            keyExtractor={(item) => item._id}
            horizontal
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
});
