// components/HeaderBackButton.tsx
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

interface HeaderBackButtonProps {
    navigation: StackNavigationProp<any, any>;
    onPress: () => void;
}

export function HeaderBackButton(props: HeaderBackButtonProps) {
    return (
        <Button onPress={props.onPress} >
            Volver
        </Button>
    );
};

