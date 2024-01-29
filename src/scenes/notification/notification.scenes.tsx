import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";

type RootStackParamList = {
    Home: undefined,
    About: undefined
}

type NotificationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export function Notification({ navigation }: NotificationProps) {
    return (
        // <Tab.Navigator
        //   initialRouteName='Home'
        //   screenOptions={{ headerShown: false }}
        // >
        //   <Tab.Screen
        //     name='Home'
        //     component={InfoScreen}
        //   />
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>
                    Hola desde Notification scenes
                </Text>

            </View>
        </SafeAreaView>
        // </Tab.Navigator>
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
