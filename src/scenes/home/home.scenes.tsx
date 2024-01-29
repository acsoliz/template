import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


type RootStackParamList = {
    Home: undefined,
    About: undefined
}

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: HomeProps) {
    return (

        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>
                    Hola
                </Text>
                <Icon name={'ios-home'} size={22} color={'#000'} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("About")}
                    style={styles.button}
                >
                    <Text>Got to About</Text>
                </TouchableOpacity>
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
