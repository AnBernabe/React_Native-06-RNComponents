import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../contexts/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigator = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigator.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={colors.primary} />
        <Text
          style={{
            ...styles.itemText,
            color: colors.text,
          }}>
          {menuItem.name}
        </Text>
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 19,
    flex: 1,
  },
});
