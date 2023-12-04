import { Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Settings = () => {
  const { ColorPallet } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: ColorPallet.brand.secondaryBackground,
      }}
    >
      <Text>{'Settings :)'}</Text>
    </SafeAreaView>
  );
};
