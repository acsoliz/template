/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { WhiteLogo } from '../../components/WhiteLogo';
import { useForm } from '../../hooks/useForm';
import { loginStyles } from './style';
import { AuthContext } from '../../context/AuthContext';
import { constants } from '../../constants/constants';

import { EmailForm, PasswordForm } from '../../components'
import { Button } from 'react-native-paper';
import { RegisterPasswordForms } from '../../components/Login/index';

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

  const { signUp, errorMessage, removeError } = useContext(AuthContext);
  const [isPasswordScreen, setIsPasswordScreen] = useState(false);


  const { email, password, name, onChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Registro incorrecto', errorMessage, [{
      text: 'Ok',
      onPress: removeError,
    }]);

  }, [errorMessage]);

  useEffect(() => {
    if (isPasswordScreen) {
      navigation.setOptions({
        // headerTitle: '',
        headerLeft: () => (
          <Button onPress={() => setIsPasswordScreen(false)}>
            Volver
          </Button>
        ),
      });
    } else {
      navigation.setOptions({
        // headerTitle: '',
        headerLeft: null,
      });
    }
  }, [isPasswordScreen]);


  const onRegister = () => {
    console.log({ email, password, name });
    Keyboard.dismiss();
    signUp({
      nombre: name,
      correo: email,
      password,
    });
  };

  return (
    <>

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: constants.colors.primary }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

        <View style={loginStyles.formContainer}>
          {
            isPasswordScreen ? (
              <RegisterPasswordForms
                password={password}
                onChange={onChange}
                onSubmit={onRegister}
                buttonLabel='REGISTRAR'
              />
            ) : (
              <EmailForm email={email}
                onChange={onChange}
                onNext={() => setIsPasswordScreen(true)}
                buttonLabel={'CONTINUAR'} />
            )}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}
            // style={loginStyles.buttonReturn}
            >
              <Text style={loginStyles.buttonText}>Tengo cuenta</Text>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

