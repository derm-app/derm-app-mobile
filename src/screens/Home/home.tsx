import { View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { DCHText } from '../../components/Text';
import { DCHView } from '../../components/Views/DCHView';
import { WeatherCard } from '../../components/weatherCard/WeatherCard';
import { FadeInLeft } from 'react-native-reanimated';
import { DCHSection } from '../../components/Views/DCHSection';

export const Home = () => {
  const { TextTheme } = useTheme();

  const isMorning = () => {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 6 && hours < 12;
  };

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
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <View style={{ maxWidth: '50%' }}>
          <DCHText
            animated
            entering={FadeInLeft.duration(1200)}
            style={[
              TextTheme.headingFour,
              { marginBottom: 16, marginLeft: 16 },
            ]}
          >
            {isMorning() ? 'Günaydın' : 'İyi akşamlar'}
          </DCHText>
          <DCHText style={TextTheme.label}>
            Oldukça sıcak bir gün. Kuru ciltli bir kişi için, nemlendirici
            içeren bir cilt bakım ürünü kullanarak cildini nemlendirmesi
            önemlidir. Eğer dışarı çıkacaksan, nemlendirici sürmeden önce yüzünü
            yıkamayı unutma.
          </DCHText>
        </View>
        <WeatherCard />
      </View>
      <DCHSection style={{ marginTop: 16 }} dark={false} />
    </DCHView>
  );
};
