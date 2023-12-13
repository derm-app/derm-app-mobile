import { Text, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DCHView } from '../../components/Views/DCHView';

export const Settings = () => {
  const { ColorPallet } = useTheme();
  return (
    <DCHView type='secondary' blurLevel={5}>
      <Text>{'Settings :)'}</Text>
    </DCHView>
  );
};
