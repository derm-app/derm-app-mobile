export enum RootStackScreens {
  Tabs = 'Tabs',
}

export enum TabScreens {
  Home = 'Home Screen',
  Profile = 'Profile Screen',
  Settings = 'Settings Screen',
}

export enum AuthStackScreens {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
}

export type RootStackParamList = {
  [RootStackScreens.Tabs]: undefined;
};

export type AuthStackParamList = {
  [AuthStackScreens.SignIn]: undefined;
  [AuthStackScreens.SignUp]: undefined;
  navigate: (screen: AuthStackScreens) => void;
};

export type TabStackParamList = {
  [TabScreens.Home]: undefined;
  [TabScreens.Profile]: undefined;
  [TabScreens.Settings]: undefined;
};
