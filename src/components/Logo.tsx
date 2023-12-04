import { Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Logo = () => {
  const { ColorPallet } = useTheme();

  return (
    <Text
      style={{
        fontFamily: 'logo',
        fontSize: 64,
        padding: 20,
        color: ColorPallet.brand.secondary,
        marginBottom: 20,
        textAlign: 'center',
      }}
    >
      Derm Care
    </Text>
  );
};
