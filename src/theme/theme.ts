import { StyleSheet } from 'react-native';

export interface IFontAttributes {
  fontFamily?: string;
  fontSize: number;
  color: string;
}

export interface IInputAttributes {
  padding?: number;
  borderRadius?: number;
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
  borderWidth?: number;
  borderColor?: string;
}

export interface IInputs {
  label: IFontAttributes;
  textInput: IInputAttributes;
  inputSelected: IInputAttributes;
  singleSelect: IInputAttributes;
  singleSelectText: IFontAttributes;
  singleSelectIcon: IInputAttributes;
  checkBoxColor: IInputAttributes;
  checkBoxText: IFontAttributes;
}

export interface ITextTheme {
  headingOne: IFontAttributes;
  headingTwo: IFontAttributes;
  headingThree: IFontAttributes;
  headingFour: IFontAttributes;
  normal: IFontAttributes;
  label: IFontAttributes;
  labelTitle: IFontAttributes;
  labelSubtitle: IFontAttributes;
  labelText: IFontAttributes;
  caption: IFontAttributes;
}

export interface IBrandColors {
  primary: string;
  primaryDisabled: string;
  secondary: string;
  secondaryDisabled: string;
  primaryLight: string;
  primaryBackground: string;
  secondaryBackground: string;
  link: string;
  text: string;
  headerText: string;
  buttonText: string;
  tabBarInactive: string;
}

export interface ISemanticColors {
  error: string;
  success: string;
  focus: string;
}

export interface INotificationColors {
  success: string;
  successBorder: string;
  successIcon: string;
  successText: string;
  info: string;
  infoBorder: string;
  infoIcon: string;
  infoText: string;
  warn: string;
  warnBorder: string;
  warnIcon: string;
  warnText: string;
  error: string;
  errorBorder: string;
  errorIcon: string;
  errorText: string;
  popupOverlay: string;
}

export interface IGrayscaleColors {
  black: string;
  darkGrey: string;
  mediumGrey: string;
  lightGrey: string;
  veryLightGrey: string;
  white: string;
}

export interface IColorPallet {
  brand: IBrandColors;
  semantic: ISemanticColors;
  notification: INotificationColors;
  grayscale: IGrayscaleColors;
}

export const borderRadius = 4;
export const heavyOpacity = 0.7;
export const mediumOpacity = 0.5;
export const lightOpacity = 0.35;
export const zeroOpacity = 0.0;

const GrayscaleColors: IGrayscaleColors = {
  black: '#000000',
  darkGrey: '#313132',
  mediumGrey: '#606060',
  lightGrey: '#D3D3D3',
  veryLightGrey: '#F2F2F2',
  white: '#FFFFFF',
};

const SemanticColors: ISemanticColors = {
  error: '#D8292F',
  success: '#2E8540',
  focus: '#3399FF',
};

const BrandColors: IBrandColors = {
  primary: '#ac3fb0',
  primaryDisabled: `rgba(53, 130, 63, ${lightOpacity})`,
  secondary: '#593592',
  secondaryDisabled: `rgba(53, 130, 63, ${heavyOpacity})`,
  primaryLight: `rgba(53, 130, 63, ${lightOpacity})`,
  primaryBackground: '#FBF4FB',
  secondaryBackground: '#ba4bff',
  link: SemanticColors.focus,
  text: GrayscaleColors.white,
  headerText: GrayscaleColors.white,
  buttonText: GrayscaleColors.white,
  tabBarInactive: GrayscaleColors.white,
};

const NotificationColors: INotificationColors = {
  success: '#313132',
  successBorder: '#2E8540',
  successIcon: '#2E8540',
  successText: '#FFFFFF',
  info: '#313132',
  infoBorder: '#0099FF',
  infoIcon: '#0099FF',
  infoText: '#FFFFFF',
  warn: '#313132',
  warnBorder: '#FCBA19',
  warnIcon: '#FCBA19',
  warnText: '#FFFFFF',
  error: '#313132',
  errorBorder: '#D8292F',
  errorIcon: '#D8292F',
  errorText: '#FFFFFF',
  popupOverlay: `rgba(0, 0, 0, ${mediumOpacity})`,
};

export const ColorPallet: IColorPallet = {
  brand: BrandColors,
  semantic: SemanticColors,
  notification: NotificationColors,
  grayscale: GrayscaleColors,
};

const FontFamily = {
  extraLight: 'extraLight',
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semiBold: 'semiBold',
  bold: 'bold',
};

export const TextTheme: ITextTheme = {
  headingOne: {
    fontSize: 38,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.primary,
  },
  headingTwo: {
    fontSize: 32,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  headingThree: {
    fontSize: 26,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  headingFour: {
    fontSize: 21,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  normal: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.text,
  },
  label: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.text,
  },
  labelTitle: {
    fontSize: 16,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  labelSubtitle: {
    fontSize: 14,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  labelText: {
    fontSize: 10,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  caption: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.text,
  },
};

export const Inputs: IInputs = StyleSheet.create({
  label: {
    ...TextTheme.label,
  },
  textInput: {
    padding: 10,
    borderRadius,
    fontSize: 16,
    backgroundColor: ColorPallet.brand.primaryBackground,
    color: ColorPallet.notification.infoText,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondary,
  },
  inputSelected: {
    borderColor: ColorPallet.brand.primary,
  },
  singleSelect: {
    padding: 12,
    borderRadius: borderRadius * 2,
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  singleSelectText: {
    ...TextTheme.normal,
  },
  singleSelectIcon: {
    color: ColorPallet.grayscale.white,
  },
  checkBoxColor: {
    color: ColorPallet.brand.primary,
  },
  checkBoxText: {
    ...TextTheme.normal,
  },
});

export const Buttons = StyleSheet.create({
  critical: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primary,
  },
  primary: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primary,
  },
  primaryDisabled: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primaryDisabled,
  },
  primaryText: {
    ...TextTheme.normal,
    color: ColorPallet.brand.buttonText,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  primaryTextDisabled: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondary: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.primary,
  },
  secondaryDisabled: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondaryDisabled,
  },
  secondaryText: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.brand.primary,
    textAlign: 'center',
  },
  secondaryTextDisabled: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.brand.secondaryDisabled,
    textAlign: 'center',
  },
});

export const TabTheme = {
  tabBarStyle: {
    height: 60,
    backgroundColor: ColorPallet.brand.secondaryBackground,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 6,
    shadowColor: ColorPallet.grayscale.black,
    shadowOpacity: 0.1,
    borderTopWidth: 0,
    paddingBottom: 0,
  },
  tabBarContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarActiveTintColor: ColorPallet.brand.primary,
  tabBarInactiveTintColor: ColorPallet.brand.tabBarInactive,
  tabBarTextStyle: {
    ...TextTheme.label,
    fontWeight: 'normal',
    paddingBottom: 5,
  },
  tabBarButtonIconStyle: {
    color: ColorPallet.brand.secondaryDisabled,
  },
  focusTabIconStyle: {
    height: 60,
    width: 60,
    backgroundColor: ColorPallet.brand.primary,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTabActiveTintColor: {
    backgroundColor: ColorPallet.brand.secondary,
  },
};

export const DefaultScreenOptions = {
  headerShown: false,
};

export interface ITheme {
  ColorPallet: IColorPallet;
  TextTheme: ITextTheme;
  Inputs: IInputs;
  Buttons: any;
  heavyOpacity: any;
  DefaultScreenOptions: any;
}

export const theme: ITheme = {
  ColorPallet,
  TextTheme,
  Inputs,
  Buttons,
  heavyOpacity,
  DefaultScreenOptions,
};
