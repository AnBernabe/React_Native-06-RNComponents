import React, {useContext} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../contexts/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Input" />

            <TextInput
              value={form.name}
              onChangeText={value => onChange(value, 'name')}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.border,
                color: colors.text,
              }}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              value={form.email}
              onChangeText={value => onChange(value, 'email')}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.border,
                color: colors.text,
              }}
              placeholderTextColor={dividerColor}
            />

            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: colors.text}}>
                isActive
              </Text>
              <CustomSwitch
                isOn={form.isSubscribe}
                onChange={value => onChange(value, 'isSubscribe')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              value={form.phone}
              onChangeText={value => onChange(value, 'phone')}
              placeholder="Ingrese su teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.border,
                color: colors.text,
              }}
              placeholderTextColor={dividerColor}
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
