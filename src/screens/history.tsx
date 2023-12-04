import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';

export const History = () => {
  const { ColorPallet } = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: ColorPallet.brand.primaryDisabled }}
    >
      <Text>History</Text>
    </SafeAreaView>
  );
};
