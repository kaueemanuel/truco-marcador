import React from 'react';

import SettingsProvider from './src/context/settings';
import Navigation from './src/routes/navigation';
import { useFonts, YanoneKaffeesatz_200ExtraLight, YanoneKaffeesatz_300Light, YanoneKaffeesatz_400Regular, YanoneKaffeesatz_500Medium, YanoneKaffeesatz_600SemiBold, YanoneKaffeesatz_700Bold } from '@expo-google-fonts/yanone-kaffeesatz';

export default function App() {
  const [fontsLoaded] = useFonts({
    YanoneKaffeesatz_200ExtraLight,
    YanoneKaffeesatz_300Light,
    YanoneKaffeesatz_400Regular,
    YanoneKaffeesatz_500Medium,
    YanoneKaffeesatz_600SemiBold,
    YanoneKaffeesatz_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SettingsProvider>
      <Navigation />
    </SettingsProvider>
  );
}