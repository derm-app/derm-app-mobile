import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AuthStackScreens,
  OnboardingStackScreens,
  RootStackScreens,
} from '../../navigation/types';
import { Logo } from '../../components/Logo';
import { ColorPallet } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import useUserStore from '../../store/useUserStore';

export const SplashScreen = () => {
  const { navigate } = useNavigation();
  const { isUserLoggedIn, isTermsAccepted, onBoardingCompleted } =
    useUserStore();

  const navigateTo = ():
    | RootStackScreens
    | AuthStackScreens
    | OnboardingStackScreens => {
    if (onBoardingCompleted && isTermsAccepted && isUserLoggedIn) {
      return RootStackScreens.Tabs;
    }
    if (onBoardingCompleted && isTermsAccepted && !isUserLoggedIn) {
      return AuthStackScreens.SignIn;
    }
    if (onBoardingCompleted && !isTermsAccepted && !isUserLoggedIn) {
      return OnboardingStackScreens.Onboarding;
    }
    if (!onBoardingCompleted && !isTermsAccepted && !isUserLoggedIn) {
      return OnboardingStackScreens.Onboarding;
    }
    return RootStackScreens.Splash;
  };

  useEffect(() => {
    setTimeout(() => {
      const screen = navigateTo() as
        | RootStackScreens
        | AuthStackScreens
        | OnboardingStackScreens;
      if (screen) {
        navigate(screen as never);
      }
    }, 1000);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: ColorPallet.brand.secondaryBackground },
      ]}
    >
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});