import axios from 'axios';

export const useOnboarding = () => {
  const baseUrl = `${process.env.EXPO_PUBLIC_BASE_URL}/onboarding`;

  const getOnboardingQuestions = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  };

  return { getOnboardingQuestions };
};
