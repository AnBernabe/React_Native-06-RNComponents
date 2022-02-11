import React, {useContext} from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../contexts/themeContext/ThemeContext';

export const AlertScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('Dismissed'),
      },
    );
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   'Esta seguro?',
    //   'Esta acción no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   'plain-text',
    //   'Hola Mundo',
    // );
    prompt(
      'Ingresa tu contraseña',
      'Ingresa tu contraseña para reclamar tus $1.5B',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'default',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button
        title="Mostrar Alerta"
        onPress={showAlert}
        color={colors.primary}
      />
      <View style={{height: 10}} />
      <Button
        title="Mostrar Prompt"
        onPress={showPrompt}
        color={colors.primary}
      />
    </View>
  );
};
