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

export const SignIn = () => {
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
        <TouchableNativeFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
              <View style={styles.overlay}>
                <Logo />
                <Text style={TextTheme.headingOne}>Giriş Yap</Text>
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
                  Giriş Yap
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableNativeFeedback>
        <TouchableOpacity
          onPress={() => {
            navigate(AuthStackScreens.SignUp);
          }}
          activeOpacity={0.8}
          style={[Buttons.secondary, styles.button, { marginBottom: 32 }]}
        >
          <Text style={[TextTheme.normalLight, { letterSpacing: 0.8 }]}>
            Kayıt ol
          </Text>
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
  },
  overlay: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
