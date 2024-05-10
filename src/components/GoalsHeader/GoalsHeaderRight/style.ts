// Goals.screeen/styles.ts
import { StyleSheet } from 'react-native';
import { constants } from '../../../constants/constants';

export const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: constants.colors.primary,
    },
    container: {
        flex: 1,
        backgroundColor: constants.colors.primary,
        justifyContent: 'center',
    },
    centralIconsContainer: {
        marginTop: 20,
        backgroundColor: constants.colors.primary,
        justifyContent: 'center',
    },
    circularProgressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        padding: 10, // Añade un padding para separar el título de los bordes de la pantalla
        alignItems: 'flex-start', // Centra el título horizontalmente
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        //fontFamily: 'OpenSans',

        marginBottom: 8
        //fontSize: 20,
        //fontWeight: 'bold',
        //marginBottom: 10, // Añade un margen inferior para separar el título de la lista
    },
    touchable: {
        marginBottom: 18,
    },
    goalName: {
        fontSize: 20,
    },
    card: {
        backgroundColor: constants.colors.background,
        //marginVertical: 5,
        //marginTop: 22,
    },
    cardContent: {
        flexDirection: 'row', // Alinea los hijos de cardContent horizontalmente
        flex: 1, // Ocupa todo el espacio disponible
    },
    leftDiv: {
        flex: 1, // Ocupa la mitad del espacio disponible
        flexDirection: 'column', // Alinea los hijos de leftDiv verticalmente
        justifyContent: 'space-between', // Distribuye el espacio entre los hijos
    },
    centerItem: {
        textAlign: 'left', // Centra el texto horizontalmente
        marginLeft: 15, // Añade un margen inferior para separar el texto de la fecha
    },
    rightDiv: {
        flex: 1, // Ocupa la mitad del espacio disponible
        justifyContent: 'center', // Centra los hijos verticalmente
        alignItems: 'flex-end', // Alinea los hijos a la derecha
    },
    foodText: {
        fontSize: 12, // Cambia esto al tamaño que prefieras
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    headerLeftButton: {
        marginLeft: 15,
        marginTop: 35
    },
    headerRigtButton: {
        marginRight: 15,
        marginTop: 35,
        flexDirection: 'row',
    },
    headerTitle: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerSubtitleText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8
    },
    listContent: {
        padding: 12
    },
});