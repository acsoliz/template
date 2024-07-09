import React, { useContext } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';


export function Logout() {
    const { user, token, logOut } = useContext(AuthContext);
    return (
        <Button onPress={logOut} >Logout</Button>
    )
}
