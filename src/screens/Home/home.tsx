import { useTheme } from '../../hooks/useTheme';
import { DCHText } from '../../components/Text';
import { DCHView } from '../../components/Views/DCHView';
import { FadeInLeft } from 'react-native-reanimated';
import { DCHSection } from '../../components/Views/DCHSection';
import { WeatherView } from '../../components/Views/WeatherSection';
import { isMorning } from '../../helpers';

export const Home = () => {
  const { TextTheme } = useTheme();

  return (
    <DCHView
      type={'primary'}
      scrollStyle={{
        borderRadius: 16,
      }}
      blurLevel={5}
      scrollable
      style={{ paddingHorizontal: 16 }}
    >
      <DCHText
        animated
        entering={FadeInLeft.duration(1200)}
        style={[TextTheme.headingOne, { marginVertical: 32, marginLeft: 16 }]}
      >
        {isMorning() ? 'Günaydın' : 'İyi akşamlar'}
      </DCHText>
      <WeatherView />
      <DCHSection style={{ marginTop: 16 }} dark={false} />
    </DCHView>
  );
};
