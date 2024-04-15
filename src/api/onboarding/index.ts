import axios from 'axios';
import { Platform } from 'react-native';

export const useOnboarding = () => {
  let onboardingUrl = '';

  if (Platform.OS === 'ios') {
    onboardingUrl = `${process.env.EXPO_PUBLIC_BASE_URL}/onboarding`;
  } else if (Platform.OS === 'android') {
    onboardingUrl = 'http://169.254.88.179:9000/onboarding';
  }

  const getOnboardingQuestions = async () => {
    try {
      const response = await axios.get(onboardingUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching onboarding questions:', error);
    }
  };

  return { getOnboardingQuestions };
};
