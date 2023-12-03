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
import { DCHTextInput } from '../../components/DCHTextInput';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList, AuthStackScreens } from '../../navigation/types';

export const SignUp = () => {
  const { ColorPallet, TextTheme } = useTheme();
  const { navigate } = useNavigation<AuthStackParamList>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableNativeFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ImageBackground
          source={require('../../../assets/makeUpBg.png')}
          style={[
            styles.backgroundImage,
            { backgroundColor: ColorPallet.brand.primaryBackground },
          ]}
        >
          <View style={styles.overlay}>
            <Text style={[styles.title, TextTheme.headingOne]}>
              Profil Oluştur
            </Text>
            <DCHTextInput
              placeholder='İsim'
              error={false}
              style={[styles.input, TextTheme.caption]}
            />
            <DCHTextInput
              placeholder='Email'
              error={false}
              style={[styles.input, TextTheme.caption]}
            />

            <View
              style={{
                alignItems: 'center',
                marginTop: 24,
                backgroundColor: 'rgba(255,255,255, 0.5)',
                alignSelf: 'center',
                padding: 8,
                borderRadius: 16,
              }}
            >
              <Text
                style={{ color: ColorPallet.brand.link, fontFamily: 'regular' }}
              >
                Hesabın var mı?{' '}
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate(AuthStackScreens.SignIn)}
              >
                <Text
                  style={[
                    TextTheme.labelTitle,
                    {
                      color: ColorPallet.brand.secondary,
                      // underline
                      textDecorationLine: 'underline',
                    },
                  ]}
                >
                  Giriş Yap
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              { backgroundColor: ColorPallet.brand.secondary },
            ]}
          >
            <Text style={[TextTheme.labelTitle, { letterSpacing: 0.8 }]}>
              Kayıt Ol
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
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
    marginTop: 100,
    padding: 20,
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
    marginTop: 48,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
