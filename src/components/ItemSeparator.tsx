import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../contexts/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...componentStyles.itemSeparator,
        borderBottomColor: dividerColor,
      }}
    />
  );
};

const componentStyles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
