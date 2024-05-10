import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export type CardTitle = 'Alimentacion' | 'Ejercicio' | 'Sueño' | 'Hidratación';


export const getCardIcon = (title: CardTitle) => {
    switch (title) {
        case 'Alimentacion':
            return <MaterialCommunityIcons name="food-apple" size={42} color="#2ECC71" />;
        case 'Ejercicio':
            return <MaterialIcons name="fitness-center" size={42} color="blue" />;
        case 'Sueño':
            return <MaterialCommunityIcons name="sleep" size={42} color="black" />;
        case 'Hidratación':
            return <Ionicons name="water-outline" size={42} color="black" />;
        default:
            return null;
    }
};