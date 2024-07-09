
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Logout} from 

import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Logout } from '../../components/Logout/index';

export function Info() {
    return (<SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
            <Text style={{ margin: 8 }}>
                INFO
            </Text>
            <Logout />
        </View>
    </SafeAreaView>)
}


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
