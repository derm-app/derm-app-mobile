import { View, StyleSheet } from 'react-native';
import { DCHText } from '../Text';

type Props = {
  style?: View['props']['style'];
  dark?: boolean;
};

export const DCHSection: React.FC<Props> = ({ style, dark = false }) => {
  return (
    <View
      style={[
        styles.seperate,
        style,
        dark ? { backgroundColor: '#000' } : { backgroundColor: '#E0E0E0' },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  seperate: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
});
