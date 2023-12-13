import { Camera, CameraType } from 'expo-camera';
import React, { useRef, useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import * as MediaLibrary from 'expo-media-library';

type CameraProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const DCHCamera = ({ isVisible, onClose }: CameraProps) => {
  const [permission, setPermission] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const cameraRef = useRef<Camera | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const reverseCamera = () => {
    setCameraType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.5}
    >
      <View style={styles.cameraContainer}>
        {permission ? (
          <Camera
            ref={(ref) => (cameraRef.current = ref)}
            style={styles.camera}
            type={cameraType}
          >
            <View style={styles.cameraOverlay}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name='ios-close' size={24} color='white' />
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={reverseCamera}
                  style={styles.rightButtons}
                >
                  <Ionicons
                    name='camera-reverse-outline'
                    size={32}
                    color='white'
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Flash');
                  }}
                  style={styles.rightButtons}
                >
                  <Ionicons name='ios-flash' size={32} color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={takePicture}
                  style={styles.captureButton}
                >
                  <Ionicons name='ios-camera' size={32} color='white' />
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        ) : (
          <Text>No access to camera</Text>
        )}
      </View>
    </Modal>
  );
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
  rightButtons: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    padding: 16,
    marginBottom: 16,
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
