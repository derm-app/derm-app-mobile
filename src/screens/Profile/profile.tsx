import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Buttons } from '../../theme/theme';
import { Button } from '../../components/buttons/Button';
import useUserStore from '../../store/useUserStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DCHCamera } from '../../modals/DCHCamera';
import { StatusBar } from 'expo-status-bar';
import { DCHView } from '../../components/Views/DCHView';
import { DCHText } from '../../components/Text';
import { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useTheme } from '../../hooks/useTheme';

export const Profile = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TextTheme } = useTheme();

  if (!permission) {
    return <View />;
  } else if (permission.granted) {
    return (
      <DCHView
        type='secondary'
        blurLevel={5}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <View>
          <DCHText
            style={TextTheme.headingTwoLight}
            animated
            entering={FadeInUp.duration(1200)}
          >
            Settings
          </DCHText>
          <DCHText entering={FadeInDown.duration(1200)} style={{}}>
            Screen
          </DCHText>
        </View>
      </DCHView>
    );
  }

  if (!permission.granted) {
    return (
      <DCHView type='secondary' blurLevel={5}>
        <DCHText animated entering={FadeInDown.duration(1200)}>
          {'Settings :)'}
        </DCHText>
      </DCHView>
    );
  }
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  closeButton: {
    padding: 8,
  },
  captureButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    padding: 16,
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: 'white',
  },
});
