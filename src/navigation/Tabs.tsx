import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScreens, TabStackParamList } from './types';
import { Home } from '../screens/home';
import { Profile } from '../screens/profile';
import { Settings } from '../screens/settings';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ColorPallet } from '../theme/theme';
import { History } from '../screens/history';

export const Tabs = () => {
  const TabBar = ({
    state,
    descriptors,
    navigation,
  }: {
    state: any;
    descriptors: any;
    navigation: any;
  }) => {
    const styles = StyleSheet.create({
      tabContainer: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: ColorPallet.brand.secondary,
        borderRadius: 18,
        justifyContent: 'space-between',
        padding: 8,
        bottom: 32,
        left: 16,
        right: 16,
      },
      tabButton: {
        padding: 10,
        borderRadius: 10,
      },
      buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
      },
      tabLabel: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 4,
      },
    });

    return (
      <View style={styles.tabContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={route.key} style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                style={[
                  styles.tabButton,
                  {
                    backgroundColor: isFocused
                      ? ColorPallet.brand.secondaryDisabled
                      : 'transparent',
                  },
                ]}
              >
                {label === TabScreens.Home ? (
                  <View style={styles.buttonContainer}>
                    <Ionicons
                      name={isFocused ? 'ios-home' : 'ios-home-outline'}
                      size={24}
                      color='#fff'
                    />
                    <Text style={styles.tabLabel}>{TabScreens.Home}</Text>
                  </View>
                ) : label === TabScreens.Profile ? (
                  <View style={styles.buttonContainer}>
                    <Ionicons
                      name={isFocused ? 'ios-person' : 'ios-person-outline'}
                      size={24}
                      color='#fff'
                    />
                    <Text style={styles.tabLabel}>{TabScreens.Profile}</Text>
                  </View>
                ) : label === TabScreens.Settings ? (
                  <View style={styles.buttonContainer}>
                    <Ionicons
                      name={isFocused ? 'ios-settings' : 'ios-settings-outline'}
                      size={24}
                      color='#fff'
                    />
                    <Text style={styles.tabLabel}>{TabScreens.Settings}</Text>
                  </View>
                ) : (
                  label === TabScreens.History && (
                    <View style={styles.buttonContainer}>
                      <Ionicons
                        name={isFocused ? 'ios-time' : 'ios-time-outline'}
                        size={24}
                        color='#fff'
                      />
                      <Text style={styles.tabLabel}>{TabScreens.History}</Text>
                    </View>
                  )
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const Tab = createBottomTabNavigator<TabStackParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name={TabScreens.Home} component={Home} />
      <Tab.Screen name={TabScreens.Profile} component={Profile} />
      <Tab.Screen name={TabScreens.Settings} component={Settings} />
      <Tab.Screen name={TabScreens.History} component={History} />
    </Tab.Navigator>
  );
};
