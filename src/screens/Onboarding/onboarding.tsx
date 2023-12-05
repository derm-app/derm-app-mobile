import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

const windowWidth = Dimensions.get('window').width;

const OnboardingPage = ({
  page,
  onNextPress,
}: {
  page: any;
  onNextPress: () => void;
}) => {
  const { ColorPallet, TextTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: page.backgroundColor,
      }}
    >
      <Image source={page.image} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        {page.title}
      </Text>
      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 16 }}>
        {page.subtitle}
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginHorizontal: 32 }}>
        {page.description}
      </Text>
      <TouchableOpacity
        onPress={onNextPress}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: '#3498db',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Onboarding = () => {
  const { ColorPallet } = useTheme();
  const pages = [
    {
      title: 'Merhaba!',
      subtitle: 'Başlamadan önce küçük bir tur atalım.',
      description:
        'Dermatolojik cilt analizini yapmak için cihazınızın kameraya ihtiyacı var.',
      backgroundColor: ColorPallet.semantic.focus,
    },
    {
      title: 'Cilt Analizi',
      subtitle: 'Cilt analizi yapmak için cihazınızı yüzünüze yaklaştırın.',
      description:
        'Dermatolojik cilt analizini yapmak için cihazınızın kameraya ihtiyacı var.',
      backgroundColor: ColorPallet.semantic.error,
    },
    {
      title: 'Cilt Analizi',
      subtitle: 'Cilt analizi yapmak için cihazınızı yüzünüze yaklaştırın.',
      description:
        'Dermatolojik cilt analizini yapmak için cihazınızın kameraya ihtiyacı var.',
      backgroundColor: ColorPallet.semantic.success,
    },
  ];

  const scrollViewRef = useRef<ScrollView>(null);

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <OnboardingPage page={item} onNextPress={() => handleNextPress(index)} />
  );

  const handleNextPress = (currentIndex: number) => {
    if (scrollViewRef.current) {
      const nextIndex = currentIndex + 1;
      scrollViewRef.current.scrollTo({ x: nextIndex * windowWidth });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      {pages.map((page, index) => (
        <View key={index} style={{ width: windowWidth }}>
          <OnboardingPage
            page={page}
            onNextPress={() => handleNextPress(index)}
          />
        </View>
      ))}
    </ScrollView>
  );
};
