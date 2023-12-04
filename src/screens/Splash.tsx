// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../components/Logo';

const SplashScreen: React.FC = () => {
  // You can add any initialization logic here if needed

  useEffect(() => {
    // Simulate some asynchronous tasks, e.g., fetching data or loading resources
    const fetchData = async () => {
      // Add your initialization logic here

      // Simulate a delay (e.g., 2000 milliseconds) for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to the next screen (replace 'RootStackScreens.Tabs' with your desired screen)
      // You may use navigation.navigate to navigate to the next screen
    };

    fetchData();
  }, []);

  return (
    <View>
      <Logo />
    </View>
  );
};

export default SplashScreen;
