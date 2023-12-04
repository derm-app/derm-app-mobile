// storeTypes.ts
export interface UserState {
  isUserLoggedIn: boolean;
  isTermsAccepted: boolean;
  onBoardingCompleted: boolean;
}

export type UserActions = {
  setLoginStatus: (status: boolean) => void;
  setTermsStatus: (status: boolean) => void;
  setOnBoardingStatus: (status: boolean) => void;
};

export type StoreState = UserState;
export type StoreActions = UserActions;
