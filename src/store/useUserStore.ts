// useUserStore.ts
import create from 'zustand';
import { StoreState, StoreActions } from './storeTypes';

const useUserStore = create<StoreState & StoreActions>((set) => ({
  // Initial state
  isUserLoggedIn: false,
  isTermsAccepted: false,
  onBoardingCompleted: false,
  
  // Actions
  setLoginStatus: (status:boolean) => set({ isUserLoggedIn: status }),
  setTermsStatus: (status: boolean) => set({ isTermsAccepted: status }),
  setOnBoardingStatus: (status: boolean) => set({ onBoardingCompleted: status }),
}));

export default useUserStore;
