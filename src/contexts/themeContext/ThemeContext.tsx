import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState, useColorScheme} from 'react-native';
import {ThemeState, ThemeReducer, lightTheme, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    ThemeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  // SOLO funcionaba en IOS, actualmente ya funciona en Android
  // useEffect(() => {
  //   if (colorScheme === 'dark') {
  //     setDarkTheme();
  //   } else {
  //     setLightTheme();
  //   }
  // }, [colorScheme]);

  //OTRA ALTERNATIVA
  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        if (Appearance.getColorScheme() === 'dark') {
          setDarkTheme();
        } else {
          setLightTheme();
        }
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('Hola DARK');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('Hola LIGHT');
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
