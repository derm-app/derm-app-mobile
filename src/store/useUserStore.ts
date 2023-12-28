import { create } from 'zustand';
import { StoreState, StoreActions } from './types';

const useUserStore = create<StoreState & StoreActions>((set) => ({
  isUserLoggedIn: false,
  isTermsAccepted: false,
  onBoardingCompleted: false,

  setLoginStatus: (status: boolean) => set({ isUserLoggedIn: status }),
  setTermsStatus: (status: boolean) => set({ isTermsAccepted: status }),
  setOnBoardingStatus: (status: boolean) =>
    set({ onBoardingCompleted: status }),
}));

export default useUserStore;
