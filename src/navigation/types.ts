export enum RootStackScreens {
  Tabs = 'Tabs',
}

export enum TabScreens {
  Home = 'Home',
  Profile = 'Profile',
  Settings = 'Settings',
  History = 'History',
}

export enum AuthStackScreens {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
}

export enum OnboardingStackScreens {
  Onboarding = 'Onboarding',
  Terms = 'Terms',
}

export type RootStackParamList = {
  [RootStackScreens.Tabs]: undefined;
};

export type AuthStackParamList = {
  [AuthStackScreens.SignIn]: undefined;
  [AuthStackScreens.SignUp]: undefined;
  navigate: (screen: AuthStackScreens) => void;
};

export type OnboardingStackParamList = {
  [OnboardingStackScreens.Onboarding]: undefined;
  [OnboardingStackScreens.Terms]: undefined;
};

export type TabStackParamList = {
  [TabScreens.Home]: undefined;
  [TabScreens.Profile]: undefined;
  [TabScreens.Settings]: undefined;
  [TabScreens.History]: undefined;
};
