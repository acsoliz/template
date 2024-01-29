import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
    SignUp: undefined
}

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export function SignUp({ navigation, route }: SignUpProps) {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={{ margin: 8 }}>
                    SignUp
                </Text>
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
