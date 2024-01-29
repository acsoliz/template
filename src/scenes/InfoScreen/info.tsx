
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Info() {
    <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
            <Text style={{ margin: 8 }}>
                INFO
            </Text>
        </View>
    </SafeAreaView>
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
