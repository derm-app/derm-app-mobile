import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation/Root';
import { ThemeProvider } from './src/contexts/theme';
import { theme } from './src/theme/theme';
import { useFonts } from 'expo-font';
export default function App() {
  const [loading] = useFonts({
    light: require('./assets/fonts/Oswald-Light.ttf'),
    regular: require('./assets/fonts/Oswald-Regular.ttf'),
    medium: require('./assets/fonts/Oswald-Medium.ttf'),
    semiBold: require('./assets/fonts/Oswald-SemiBold.ttf'),
    bold: require('./assets/fonts/Oswald-Bold.ttf'),
  });

  if (!loading) {
    return null;
  } else {
    return (
      <ThemeProvider value={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
