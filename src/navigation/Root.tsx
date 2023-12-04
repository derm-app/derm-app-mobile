import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import {
  AuthStackParamList,
  AuthStackScreens,
  OnboardingStackParamList,
  OnboardingStackScreens,
  RootStackParamList,
  RootStackScreens,
} from './types';
import { Onboarding } from '../screens/Onboarding/onboarding';
import { SignIn } from '../screens/Auth/signIn';
import { SignUp } from '../screens/Auth/signUp';
import { useTheme } from '../hooks/useTheme';
import { Tabs } from './Tabs';

export const RootNavigation = () => {
  const { DefaultScreenOptions } = useTheme();

  const onboardingStack = () => {
    const Stack = createNativeStackNavigator<OnboardingStackParamList>();

    return (
      <Stack.Navigator screenOptions={DefaultScreenOptions}>
        {/* <AuthStack.Screen name='splash' component={SplashScreen} */}
        <Stack.Screen
          name={OnboardingStackScreens.Onboarding}
          component={Onboarding}
        />
      </Stack.Navigator>
    );
  };

  const main = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
      <Stack.Navigator screenOptions={{ ...DefaultScreenOptions }}>
        {/* <AuthStack.Screen name='splash' component={SplashScreen} */}
        <Stack.Screen name={RootStackScreens.Tabs} component={Tabs} />
      </Stack.Navigator>
    );
  };

  const authNavigation = () => {
    const AuthStack = createNativeStackNavigator<AuthStackParamList>();

    return (
      <>
        <StatusBar style='dark' />
        <AuthStack.Navigator
          screenOptions={{ ...DefaultScreenOptions, animation: 'fade' }}
        >
          {/* <AuthStack.Screen name='splash' component={SplashScreen} */}
          <AuthStack.Screen name={AuthStackScreens.SignIn} component={SignIn} />
          <AuthStack.Screen name={AuthStackScreens.SignUp} component={SignUp} />
        </AuthStack.Navigator>
      </>
    );
  };

  const isUserLoggedIn = true;
  const isTermsAccepted = true;
  const onBoardingCompleted = true;

  const returnStack = () => {
    return onBoardingCompleted && isTermsAccepted
      ? isUserLoggedIn
        ? main()
        : authNavigation()
      : onboardingStack();
  };

  return returnStack();
};
