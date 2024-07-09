// Components/Login/RegisterPasswordForms/index.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { loginStyles } from '../../../screens/Register.screen/style';

interface RegisterPasswordFormsProps {
    password: string;
    onChange: (value: string, field: string) => void;
    onSubmit: () => void;
    buttonLabel: string;
}

export function RegisterPasswordForms(props: RegisterPasswordFormsProps) {
    const { password, onChange, onSubmit, buttonLabel } = props;
    const [rePassword, setRePassword] = useState('');
    const [isConfirmScreen, setIsConfirmScreen] = useState(false);
    const [error, setError] = useState('');

    const handleNext = () => {
        if (password.length === 0) {
            setError('La contraseña no puede estar vacía');
            return;
        }
        setIsConfirmScreen(true);
    };

    const handleConfirm = () => {
        if (password !== rePassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        onSubmit();
    };

    return (
        <View style={loginStyles.formContainer}>
            {!isConfirmScreen ? (
                <>
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
                    {error.length > 0 && <Text style={{ color: 'red' }}>{error}</Text>}
                    <Button
                        mode="outlined"
                        textColor='white'
                        style={{ borderRadius: 8, backgroundColor: 'red' }}
                        onPress={handleNext}
                    >
                        Continuar
                    </Button>
                </>
            ) : (
                <>
                    <Text style={loginStyles.title}>Reingresa tu contraseña</Text>
                    <TextInput
                        mode="outlined"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        secureTextEntry
                        style={{
                            backgroundColor: '#dbe9f7',
                            borderColor: '#007bff',
                        }}
                        onChangeText={setRePassword}
                        value={rePassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {error.length > 0 && <Text style={{ color: 'red' }}>{error}</Text>}
                    <Button
                        mode="outlined"
                        textColor='white'
                        style={{ borderRadius: 8, backgroundColor: 'red' }}
                        onPress={handleConfirm}
                    >
                        {buttonLabel}
                    </Button>
                </>
            )}
        </View>
    );
}
