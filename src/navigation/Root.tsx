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
import { SplashScreen } from '../screens/Splash/Splash';
import useUserStore from '../store/useUserStore';

export const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { DefaultScreenOptions } = useTheme();
  const { isUserLoggedIn, isTermsAccepted, onBoardingCompleted } =
    useUserStore();

  const onboardingStack = () => {
    const Stack = createNativeStackNavigator<OnboardingStackParamList>();

    return (
      <Stack.Navigator
        screenOptions={{ ...DefaultScreenOptions }}
        initialRouteName={RootStackScreens.Splash}
      >
        <Stack.Screen name={RootStackScreens.Splash} component={SplashScreen} />
        <Stack.Screen
          name={OnboardingStackScreens.Onboarding}
          component={Onboarding}
        />
      </Stack.Navigator>
    );
  };

  const main = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          ...DefaultScreenOptions,
        }}
        initialRouteName={RootStackScreens.Splash}
      >
        <Stack.Screen name={RootStackScreens.Splash} component={SplashScreen} />
        <Stack.Screen name={RootStackScreens.Tabs} component={Tabs} />
      </Stack.Navigator>
    );
  };

  const authNavigation = () => {
    const AuthStack = createNativeStackNavigator<AuthStackParamList>();

    return (
      <>
        <AuthStack.Navigator
          screenOptions={{ ...DefaultScreenOptions, animation: 'fade' }}
          initialRouteName={RootStackScreens.Splash}
        >
          <Stack.Screen
            name={RootStackScreens.Splash}
            component={SplashScreen}
          />
          <AuthStack.Screen name={AuthStackScreens.SignIn} component={SignIn} />
          <AuthStack.Screen name={AuthStackScreens.SignUp} component={SignUp} />
        </AuthStack.Navigator>
      </>
    );
  };

  const returnStack = () => {
    return onBoardingCompleted && isTermsAccepted
      ? isUserLoggedIn
        ? main()
        : authNavigation()
      : onboardingStack();
  };

  return returnStack();
};
