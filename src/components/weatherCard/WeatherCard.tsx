import { Dimensions, Image, View } from 'react-native';
import { DCHText } from '../Text';
import { DCHView } from '../Views/DCHView';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../api/weather/getWeather';
import { useEffect, useState } from 'react';

const { width, height } = Dimensions.get('window');

export const WeatherCard = () => {
  const { TextTheme, ColorPallet } = useTheme();
  const { getWeather } = useWeather();
  const [weather, setWeather] = useState({
    tempc: 0,
    weatherIcon: '',
    humidity: 0,
    wind: 0,
    condition: '',
  });

  useEffect(() => {
    getWeather('Istanbul').then((res) => {
      setWeather({
        tempc: res.current.temp_c,
        weatherIcon: res.current.condition.icon,
        humidity: res.current.humidity,
        wind: res.current.wind_kph,
        condition: res.current.condition.text,
      });
    });
  }, []);

  return (
    <View
      style={{
        borderRadius: 16,
        backgroundColor: ColorPallet.brand.primaryBackground,
        width: width / 2.5,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: -3,
          height: 4,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <DCHText style={TextTheme.headingTwoLight}>
          {weather.tempc}&#176;C
        </DCHText>
        <Image
          source={{
            uri: `https:${weather.weatherIcon}`,
          }}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name='location'
            size={20}
            color={ColorPallet.brand.primary}
          />
          <DCHText style={TextTheme.labelTitleLight}>İstanbul</DCHText>
        </View>
        <DCHText style={TextTheme.labelLight}>{weather.condition}</DCHText>
      </View>
      <View style={{ paddingTop: 10 }}>
        <DCHText style={TextTheme.labelTitleLight}>
          Nem: %{weather.humidity}
        </DCHText>
        <DCHText style={TextTheme.normalLight}>
          Rüzgar: {weather.wind}km/s
        </DCHText>
      </View>
    </View>
  );
};
