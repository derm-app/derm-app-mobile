import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import { DCHTextInput } from '../../components/Inputs/DCHTextInput';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList, AuthStackScreens } from '../../navigation/types';
import { Buttons } from '../../theme/theme';
import { Logo } from '../../components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignUp = () => {
  const { ColorPallet, TextTheme } = useTheme();
  const { navigate } = useNavigation<AuthStackParamList>();
  return (
    <ImageBackground
      source={require('../../../assets/makeUpBg.png')}
      style={[
        styles.backgroundImage,
        { backgroundColor: ColorPallet.brand.primaryBackground },
      ]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <TouchableNativeFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
              <View style={styles.overlay}>
                <Logo />
                <Text style={[styles.title, TextTheme.headingOne]}>
                  Kayıt Ol
                </Text>
                <DCHTextInput
                  placeholder='Email'
                  error={false}
                  style={[styles.input, TextTheme.caption]}
                />
                <DCHTextInput
                  placeholder='Parola'
                  error={false}
                  style={[styles.input, TextTheme.caption]}
                />
                <DCHTextInput
                  placeholder='Email'
                  error={false}
                  style={[styles.input, TextTheme.caption]}
                />
                <DCHTextInput
                  placeholder='Parola'
                  error={false}
                  style={[styles.input, TextTheme.caption]}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[Buttons.primary, styles.button]}
              >
                <Text style={[TextTheme.normal, { letterSpacing: 0.8 }]}>
                  Kayıt Ol
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableNativeFeedback>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={() => {
            navigate(AuthStackScreens.SignIn);
          }}
          activeOpacity={0.8}
          style={[Buttons.secondary, styles.button, { marginBottom: 32 }]}
        >
          <Text style={[TextTheme.normalLight]}>Zaten hesabım var</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  overlay: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title: {
    marginBottom: 10,
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
