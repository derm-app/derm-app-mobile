import { create } from 'zustand';
import { StoreState, StoreActions } from './types';

const useUserStore = create<StoreState & StoreActions>((set) => ({
  isUserLoggedIn: true,
  isTermsAccepted: true,
  onBoardingCompleted: true,

  setLoginStatus: (status: boolean) => set({ isUserLoggedIn: status }),
  setTermsStatus: (status: boolean) => set({ isTermsAccepted: status }),
  setOnBoardingStatus: (status: boolean) =>
    set({ onBoardingCompleted: status }),
}));

export default useUserStore;
