import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import {
  AuthStackParamList,
  AuthStackScreens,
  RootStackParamList,
  RootStackScreens,
} from './types';
import { SignIn } from '../screens/Auth/signIn';
import { Tabs } from './Tabs';
import { SignUp } from '../screens/Auth/signUp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { StatusBar } from 'expo-status-bar';

export const RootNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const { DefaultScreenOptions } = useTheme();

  const Root = () => {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left']}>
        <RootStack.Navigator screenOptions={{ ...DefaultScreenOptions }}>
          <RootStack.Screen name={RootStackScreens.Tabs} component={Tabs} />
        </RootStack.Navigator>
      </SafeAreaView>
    );
  };

  const AuthNavigation = () => {
    const AuthStack = createNativeStackNavigator<AuthStackParamList>();

    return (
      <SafeAreaView style={styles.container} edges={['top', 'left']}>
        <StatusBar style='dark' />
        <AuthStack.Navigator
          screenOptions={{ ...DefaultScreenOptions }}
          initialRouteName={AuthStackScreens.SignIn}
        >
          <AuthStack.Screen name={AuthStackScreens.SignIn} component={SignIn} />
          <AuthStack.Screen name={AuthStackScreens.SignUp} component={SignUp} />
        </AuthStack.Navigator>
      </SafeAreaView>
    );
  };

  if (false) {
    return <Root />;
  } else {
    return <AuthNavigation />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
