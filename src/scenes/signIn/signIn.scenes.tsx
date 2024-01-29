import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthentication } from '../../feature/auth/hooks/useAuthentication';
import { useAuth } from '../../feature/auth/context/index';

type RootStackParamList = {
    SignIn: undefined
}

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export function SignIn({ navigation, route }: SignInProps) {
    const { signIn } = useAuthentication();

    const handlerSignIn = () => {
        signIn({ email: 'acsoliz@asdas.com', password: '12345678' })
    };

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={{ margin: 8 }}>
                    Login
                </Text>
                <Button onPress={handlerSignIn} title='Login' color="#EC5870" />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {

    },
    buttonText: {

    }
});
