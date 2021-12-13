import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import usePersistedState from '../utils/usePersistedState';
import defaultTheme from '../style/theme';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import Navigation from '../routes/navigation';

type SettingsContextType = {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
  maxPontuation: string;
  setMaxPontuation: Dispatch<SetStateAction<string>>;
  weName: string;
  setWeName: Dispatch<SetStateAction<string>>;
  theyName: string;
  setTheyName: Dispatch<SetStateAction<string>>;
  wePoint: number;
  setWePoint: Dispatch<SetStateAction<number>>;
  theyPoint: number;
  setTheyPoint: Dispatch<SetStateAction<number>>;
}

const SettingsContext = createContext<SettingsContextType>({} as SettingsContextType);

export default function SettingsProvider({ children }: any) {
  const [theme, setTheme] = usePersistedState('theme', defaultTheme.light);
  const [maxPontuation, setMaxPontuation] = usePersistedState('maxPontuation', '15');
  const [weName, setWeName] = usePersistedState('weName', 'NÓS');
  const [theyName, setTheyName] = usePersistedState('theyName', 'ELES');
  const [wePoint, setWePoint] = usePersistedState('wePoint', 0);
  const [theyPoint, setTheyPoint] = usePersistedState('theyPoint', 0);

  return <SettingsContext.Provider value={{
    theme,
    setTheme: setTheme,
    maxPontuation,
    setMaxPontuation,
    weName,
    setWeName,
    theyName,
    setTheyName,
    wePoint,
    setWePoint,
    theyPoint,
    setTheyPoint,
  }}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </SettingsContext.Provider>
}

export const useSettings = () => useContext(SettingsContext);