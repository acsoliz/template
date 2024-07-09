// Components/Login/PasswordForm/index.tsx
import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { loginStyles } from '../../../screens/Register.screen/style';

interface PasswordFormProps {
    password: string;
    onChange: (value: string, field: string) => void;
    onSubmit: () => void;
    buttonLabel: string
}

export function PasswordForm(props: PasswordFormProps) {
    const { password, onChange, onSubmit, buttonLabel } = props;
    return (
        <View style={loginStyles.formContainer}>
            <Text style={loginStyles.title}>Introduce tu contraseña</Text>


            <TextInput
                mode="outlined"

                placeholderTextColor="rgba(255,255,255,0.4)"
                secureTextEntry
                style={{
                    backgroundColor: '#dbe9f7',
                    borderColor: '#007bff',
                }}

                onChangeText={(value) => onChange(value, 'password')}
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button
                mode="outlined"
                textColor='white'
                style={{ borderRadius: 8, backgroundColor: 'red' }}
                onPress={onSubmit}
            >
                {buttonLabel}
            </Button>
        </View>
    );
};

