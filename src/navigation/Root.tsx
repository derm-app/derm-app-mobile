import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AuthStackParamList,
  AuthStackScreens,
  OnboardingStackParamList,
  OnboardingStackScreens,
  RootStackParamList,
  RootStackScreens,
} from './types';
import { SignIn } from '../screens/Auth/signIn';
import { Tabs } from './Tabs';
import { SignUp } from '../screens/Auth/signUp';
import { StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { StatusBar } from 'expo-status-bar';
import { Onboarding } from '../screens/Onboarding/onboarding';

export const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { DefaultScreenOptions } = useTheme();

  const main = () => {
    return (
      <Stack.Navigator screenOptions={{ ...DefaultScreenOptions }}>
        <Stack.Screen name={RootStackScreens.Tabs} component={Tabs} />
      </Stack.Navigator>
    );
  };

  const authNavigation = () => {
    const AuthStack = createNativeStackNavigator<AuthStackParamList>();

    return (
      <>
        <StatusBar style='dark' />
        <AuthStack.Navigator screenOptions={DefaultScreenOptions}>
          {/* <AuthStack.Screen name='splash' component={SplashScreen} */}
          <AuthStack.Screen name={AuthStackScreens.SignIn} component={SignIn} />
          <AuthStack.Screen name={AuthStackScreens.SignUp} component={SignUp} />
        </AuthStack.Navigator>
      </>
    );
  };

  const onboardingStack = () => {
    const Stack = createNativeStackNavigator<OnboardingStackParamList>();

    return (
      <Stack.Navigator screenOptions={DefaultScreenOptions}>
        <Stack.Screen
          name={OnboardingStackScreens.Onboarding}
          component={Onboarding}
        />
      </Stack.Navigator>
    );
  };

  const isUserLoggedIn = false;
  const isTermsAccepted = false;

  const returnStack = () => {
    return isUserLoggedIn
      ? isTermsAccepted
        ? main()
        : onboardingStack()
      : authNavigation();
  };

  return returnStack();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
