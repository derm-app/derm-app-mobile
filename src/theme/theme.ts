import { StyleSheet } from 'react-native';
import { FigmaColors } from '../FigmaTokens.json';
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
  headingOneLight: IFontAttributes;
  headingTwo: IFontAttributes;
  headingTwoLight: IFontAttributes;
  headingThree: IFontAttributes;
  headingThreeLight: IFontAttributes;
  headingFour: IFontAttributes;
  headingFourLight: IFontAttributes;
  normal: IFontAttributes;
  normalLight: IFontAttributes;
  label: IFontAttributes;
  labelLight: IFontAttributes;
  labelTitle: IFontAttributes;
  labelTitleLight: IFontAttributes;
  labelSubtitle: IFontAttributes;
  labelSubtitleLight: IFontAttributes;
  labelText: IFontAttributes;
  labelTextLight: IFontAttributes;
  caption: IFontAttributes;
  captionLight: IFontAttributes;
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
  textSecondary: string;
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

export const spacing = {
  xxs: 4,
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
};

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
  primary: FigmaColors.primary,
  primaryDisabled: FigmaColors.primaryLight,
  secondary: FigmaColors.secondary,
  secondaryDisabled: `rgba(37, 21, 157, ${heavyOpacity})`,
  primaryLight: FigmaColors.primaryLight,
  primaryBackground: FigmaColors.primaryBackground,
  secondaryBackground: FigmaColors.secondaryBackground,
  link: FigmaColors.blueBlue7P,
  textSecondary: FigmaColors.secondary,
  text: FigmaColors.white100P,
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
    fontSize: 48,
    fontFamily: FontFamily.medium,
    color: ColorPallet.brand.text,
  },
  headingOneLight: {
    fontSize: 48,
    fontFamily: FontFamily.medium,
    color: ColorPallet.brand.textSecondary,
  },
  headingTwo: {
    fontSize: 32,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  headingTwoLight: {
    fontSize: 32,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.textSecondary,
  },
  headingThree: {
    fontSize: 26,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  headingThreeLight: {
    fontSize: 26,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.textSecondary,
  },
  headingFour: {
    fontSize: 21,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  headingFourLight: {
    fontSize: 21,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.textSecondary,
  },
  normal: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.text,
  },
  normalLight: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.textSecondary,
  },
  label: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.text,
  },
  labelLight: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.textSecondary,
  },
  labelTitle: {
    fontSize: 18,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  labelTitleLight: {
    fontSize: 18,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.textSecondary,
  },
  labelSubtitle: {
    fontSize: 14,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  labelSubtitleLight: {
    fontSize: 14,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.textSecondary,
  },
  labelText: {
    fontSize: 10,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.text,
  },
  labelTextLight: {
    fontSize: 10,
    fontFamily: FontFamily.bold,
    color: ColorPallet.brand.textSecondary,
  },
  caption: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.text,
  },
  captionLight: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: ColorPallet.brand.textSecondary,
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

export type Buttons = {
  critical: any;
  primary: any;
  primaryDisabled: any;
  secondary: any;
  secondaryDisabled: any;
};

export type ButtonText = {
  criticalText: any;
  primaryText: any;
  secondaryText: any;
  secondaryTextDisabled: any;
};

export const ButtonText: ButtonText = {
  criticalText: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.brand.buttonText,
    textAlign: 'center',
  },
  primaryText: {
    ...TextTheme.normal,
    alignItems: 'center',
    justifyContent: 'center',
    color: ColorPallet.brand.buttonText,
    fontWeight: 'bold',
    textAlign: 'center',
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
};

export const Buttons: Buttons = {
  critical: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    borderRadius: 16,
    backgroundColor: ColorPallet.semantic.error,
  },
  primary: {
    ...TextTheme.normal,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    borderRadius: 16,
    backgroundColor: ColorPallet.brand.primary,
  },
  primaryDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    borderRadius: 16,
    backgroundColor: ColorPallet.brand.primaryDisabled,
  },
  secondary: {
    ...TextTheme.normalLight,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: ColorPallet.grayscale.white,
    borderColor: ColorPallet.brand.secondary,
  },
  secondaryDisabled: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondaryDisabled,
  },
};

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
  backgroundColor: 'transparent',
};

export interface ITheme {
  ColorPallet: IColorPallet;
  TextTheme: ITextTheme;
  Inputs: IInputs;
  Buttons: Buttons;
  heavyOpacity: any;
  DefaultScreenOptions: any;
  ButtonText: ButtonText;
}

export const theme: ITheme = {
  ColorPallet,
  TextTheme,
  Inputs,
  Buttons,
  heavyOpacity,
  DefaultScreenOptions,
  ButtonText,
};
