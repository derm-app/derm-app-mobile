import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ColorPallet } from '../theme/theme';
import { TabScreens } from './types';
import { Ionicons } from '@expo/vector-icons';
import { DCHCamera } from '../modals/DCHCamera';

const ICON_SIZE = 32;

export const CustomTabbar = ({
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
      backgroundColor: ColorPallet.grayscale.darkGrey,
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: 32,
      paddingTop: 8,
      bottom: 0,
      left: 0,
      right: 0,
    },
    tabButton: {
      padding: 10,
      borderRadius: 10,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    camera: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
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
                    ? 'rgba(255, 255, 255, 0.1)'
                    : label === TabScreens.Camera
                    ? ColorPallet.brand.primaryBackground
                    : 'transparent',
                },
              ]}
            >
              {label === TabScreens.Home ? (
                <View style={styles.buttonContainer}>
                  <Ionicons
                    name={isFocused ? 'ios-home' : 'ios-home-outline'}
                    size={ICON_SIZE}
                    color='#fff'
                  />
                </View>
              ) : label === TabScreens.Profile ? (
                <View style={styles.buttonContainer}>
                  <Ionicons
                    name={isFocused ? 'ios-person' : 'ios-person-outline'}
                    size={ICON_SIZE}
                    color='#fff'
                  />
                </View>
              ) : label === TabScreens.Settings ? (
                <View style={styles.buttonContainer}>
                  <Ionicons
                    name={isFocused ? 'ios-settings' : 'ios-settings-outline'}
                    size={ICON_SIZE}
                    color='#fff'
                  />
                </View>
              ) : label === TabScreens.SkinAnalysis ? (
                <View style={styles.buttonContainer}>
                  <Ionicons
                    name={isFocused ? 'ios-time' : 'ios-time-outline'}
                    size={ICON_SIZE}
                    color='#fff'
                  />
                </View>
              ) : label === TabScreens.Camera ? (
                <View style={styles.camera}>
                  <Ionicons
                    name={'ios-camera-outline'}
                    size={ICON_SIZE}
                    color='#000'
                  />
                  <DCHCamera
                    isVisible={isFocused}
                    onClose={() => {
                      navigation.navigate(TabScreens.Home);
                    }}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
