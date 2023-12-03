import { View, Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Home = () => {
  const { ColorPallet, TextTheme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Text style={TextTheme.headingOne}>Merhaba</Text>
    </View>
  );
};
