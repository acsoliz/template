import React, { useContext, useEffect, useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { loginStyles } from '../Register.screen/style';
import { constants } from '../../constants/constants';

import { EmailForm, PasswordForm } from '../../components'




interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {
  const { signIn, errorMessage, removeError } = useContext(AuthContext);
  const [isPasswordScreen, setIsPasswordScreen] = useState(false);

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

  const onLogin = () => {
    Keyboard.dismiss();
    signIn({ correo: email, password });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: constants.colors.primary }}
      behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
    >
      <View style={loginStyles.formContainer}>
        {isPasswordScreen ? (
          <PasswordForm password={password} onChange={onChange} onSubmit={onLogin} buttonLabel='INICIAR SESION' />

        ) : (
          <EmailForm email={email} onChange={onChange} onNext={() => setIsPasswordScreen(true)} buttonLabel='CONTINUAR' />
        )}

        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('RegisterScreen')}
          >
            <Text style={loginStyles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
