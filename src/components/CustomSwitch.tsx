import React, {useContext, useState} from 'react';
import {Switch, Platform} from 'react-native';
import {ThemeContext} from '../contexts/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{false: dividerColor, true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
