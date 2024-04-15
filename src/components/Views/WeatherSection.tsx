import { View } from 'react-native';
import { TextTheme } from '../../theme/theme';
import { DCHText } from '../Text';
import { WeatherCard } from '../weatherCard/WeatherCard';

export const WeatherView = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <View style={{ maxWidth: '50%' }}>
        <DCHText style={TextTheme.labelLight}>
          Oldukça sıcak bir gün. Kuru ciltli bir kişi için, nemlendirici içeren
          bir cilt bakım ürünü kullanarak cildini nemlendirmesi önemlidir. Eğer
          dışarı çıkacaksan, nemlendirici sürmeden önce yüzünü yıkamayı unutma.
        </DCHText>
      </View>
      <WeatherCard />
    </View>
  );
};
