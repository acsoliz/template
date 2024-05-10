/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { WhiteLogo } from '../../components/WhiteLogo';
import { useForm } from '../../hooks/useForm';
import { loginStyles } from '../Register.screen/style';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/AuthContext';
import { constants } from '../../constants/constants';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {

  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Login incorrecto', errorMessage, [{
      text: 'Ok',
      onPress: removeError,
    }]);

  }, [errorMessage]);

  const onLogin = () => {
    Keyboard.dismiss();
    signIn({ correo: email, password });
  };

  return (
    <>
      {/* Background */}
      {/* <Background />
       */}


      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: constants.colors.primary }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

        <View style={loginStyles.formContainer}>

          {/* Keyboard avoid view */}
          {/* <WhiteLogo /> */}

          <Text style={loginStyles.title}>¿Cuál es tu email y tu contraseña?</Text>

          <Text style={loginStyles.label}> </Text>

          <TextInput
            placeholder="Email:"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid='black'
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS,
            ]}
            selectionColor='black'
            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={loginStyles.label}> </Text>

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid='black'
            secureTextEntry
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS,
            ]}
            selectionColor='black'
            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Boton login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Crear una nueva cuenta */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}
            >
              <Text style={loginStyles.buttonText}>Nueva cuenta </Text>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAvoidingView>
    </>
  );
};
