import { Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Settings = () => {
  const { ColorPallet } = useTheme();
  return (
    <View
      style={{ backgroundColor: ColorPallet.brand.primaryDisabled, flex: 1 }}
    >
      <Text>{'Settings :)'}</Text>
    </View>
  );
};
