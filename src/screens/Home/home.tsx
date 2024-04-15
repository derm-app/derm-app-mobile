import { DCHView } from '../../components/Views/DCHView';
import { WeatherView } from '../../components/Views/WeatherSection';
import { getGreeting } from '../../helpers';

export const Home = () => {
  return (
    <DCHView
      scrollStyle={{
        borderRadius: 16,
      }}
      scrollable
      style={{ paddingHorizontal: 16 }}
      title={getGreeting()}
    >
      <WeatherView />
    </DCHView>
  );
};
