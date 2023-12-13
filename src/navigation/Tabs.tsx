import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScreens, TabStackParamList } from './types';
import { Home } from '../screens/Home/home';
import { Profile } from '../screens/Profile/profile';
import { Settings } from '../screens/Settings/settings';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SkinAnalysisScreen } from '../screens/SkinAnalysis/skinAnalysisScreen';
import { CustomTabbar } from './CustomTabbar';
import { useNavigation } from '@react-navigation/native';

export const Tabs = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();
  const [isModalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation<TabStackParamList>();

  const onPressCameraButton = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabbar {...props} />}
      >
        <Tab.Screen name={TabScreens.Home} component={Home} />
        <Tab.Screen
          name={TabScreens.SkinAnalysis}
          component={SkinAnalysisScreen}
        />
        <Tab.Screen name={TabScreens.Camera}>
          {() => (
            <TouchableOpacity
              onPress={() => {
                navigate(TabScreens.Camera);
              }}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name={TabScreens.Settings} component={Settings} />
        <Tab.Screen name={TabScreens.Profile} component={Profile} />
      </Tab.Navigator>
    </View>
  );
};
