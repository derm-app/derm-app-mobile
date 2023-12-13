import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation/Root';
import { ThemeProvider } from './src/contexts/theme';
import { theme } from './src/theme/theme';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [loading] = useFonts({
    logo: require('./assets/fonts/Ephesis-Regular.ttf'),
    light: require('./assets/fonts/Roboto-Light.ttf'),
    lightItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
    regular: require('./assets/fonts/Roboto-Regular.ttf'),
    regularItalic: require('./assets/fonts/Roboto-Italic.ttf'),
    medium: require('./assets/fonts/Roboto-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
    bold: require('./assets/fonts/Roboto-Bold.ttf'),
    boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
    black: require('./assets/fonts/Roboto-Black.ttf'),
    blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
  });

  if (!loading) {
    return null;
  } else {
    return (
      <ThemeProvider value={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar style='auto' />
            <RootNavigation />
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
