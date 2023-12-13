export enum RootStackScreens {
  Tabs = 'Tabs',
  Splash = 'Splash',
}

export enum TabScreens {
  Home = 'Home',
  Profile = 'Profile',
  Settings = 'Settings',
  SkinAnalysis = 'Skin',
  Camera = 'Camera',
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
  [RootStackScreens.Splash]: undefined;
};

export type AuthStackParamList = {
  [RootStackScreens.Splash]: undefined;
  [AuthStackScreens.SignIn]: undefined;
  [AuthStackScreens.SignUp]: undefined;
  navigate: (screen: AuthStackScreens) => void;
};

export type OnboardingStackParamList = {
  [RootStackScreens.Splash]: undefined;
  [OnboardingStackScreens.Onboarding]: undefined;
  [OnboardingStackScreens.Terms]: undefined;
};

export type TabStackParamList = {
  [RootStackScreens.Splash]: undefined;
  [TabScreens.Home]: undefined;
  [TabScreens.SkinAnalysis]: undefined;
  [TabScreens.Camera]: undefined;
  [TabScreens.Settings]: undefined;
  [TabScreens.Profile]: undefined;
  navigate: (screen: TabScreens) => void;
};
