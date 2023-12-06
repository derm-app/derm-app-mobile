import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AuthStackScreens,
  OnboardingStackScreens,
  RootStackScreens,
} from '../../navigation/types';
import { Logo } from '../../components/Logo';
import { ColorPallet } from '../../theme/theme';
import { useNavigation } from '@react-navigation/core';
import useUserStore from '../../store/useUserStore';
import { CommonActions } from '@react-navigation/native';

export const SplashScreen = () => {
  const { dispatch } = useNavigation();
  const { isUserLoggedIn, isTermsAccepted, onBoardingCompleted } =
    useUserStore();

  useEffect(() => {
    setTimeout(() => {
      if (!isUserLoggedIn || !isTermsAccepted) {
        const routeName = !onBoardingCompleted
          ? OnboardingStackScreens.Onboarding
          : AuthStackScreens.SignIn;

        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: routeName }],
          })
        );
      } else {
        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: RootStackScreens.Tabs }],
          })
        );
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
