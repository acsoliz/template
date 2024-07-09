// components/EmailForm.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { loginStyles } from '../../../screens/Register.screen/style';
import { constants } from '../../../constants/';
import { isValidEmail } from '../../../helpers/utils';

interface EmailFormProps {
    email: string;
    onChange: (value: string, field: string) => void;
    onNext: () => void;
    buttonLabel: string; // TODO esto puede tener los valores: Login | Registrar
}

export function EmailForm(props: EmailFormProps) {
    const { email, onChange, onNext, buttonLabel } = props;
    const isEmailValid = isValidEmail(email);

    return (
        <View style={loginStyles.formContainer}>
            <View
                style={{ gap: 15 }}
            >
                <Text style={loginStyles.title}>¿Cuál es tu email?</Text>
                <TextInput
                    mode="outlined"
                    placeholder="Email:"
                    keyboardType="email-address"
                    onChangeText={(value) => onChange(value, 'email')}
                    value={email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{
                        backgroundColor: '#dbe9f7',
                        borderColor: '#007bff',
                    }}
                />
            </ View>
            <>
                <Button
                    disabled={!isEmailValid}
                    mode="outlined"
                    textColor='white'
                    style={{ borderRadius: 8, backgroundColor: 'red' }}
                    onPress={onNext}
                >
                    <Text style={{ fontWeight: "bold" }}>{buttonLabel}</Text>
                </Button>
            </>
        </View >
    );
};


