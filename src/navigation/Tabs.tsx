import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScreens, TabStackParamList } from './types';
import { Home } from '../screens/home';
import { Profile } from '../screens/profile';
import { Settings } from '../screens/settings';

export const Tabs = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={TabScreens.Home} component={Home} />
      <Tab.Screen name={TabScreens.Profile} component={Profile} />
      <Tab.Screen name={TabScreens.Settings} component={Settings} />
    </Tab.Navigator>
  );
};
