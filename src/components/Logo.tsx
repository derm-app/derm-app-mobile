import { Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Logo = () => {
  const { ColorPallet } = useTheme();

  return (
    <Text
      style={{
        fontFamily: 'logo',
        fontSize: 64,
        color: ColorPallet.brand.primary,
        paddingLeft: 20,
      }}
    >
      Derm Care
    </Text>
  );
};
