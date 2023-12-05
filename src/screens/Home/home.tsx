import { Text } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const { TextTheme, ColorPallet } = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: ColorPallet.brand.primaryBackground }}
    >
      <Text style={TextTheme.headingOne}>Merhaba</Text>
    </SafeAreaView>
  );
};
