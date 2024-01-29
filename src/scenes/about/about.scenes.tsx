import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
    Home: undefined,
    About: undefined
}

type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

export function About({ navigation, route }: AboutProps) {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={{ margin: 8 }}>
                    About
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
