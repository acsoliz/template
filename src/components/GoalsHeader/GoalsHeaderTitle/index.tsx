import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { format, subDays, addDays } from 'date-fns';
import { styles } from './style';
import { es } from 'date-fns/locale';


interface HeaderProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
}

export const GoalsHeaderTitle = ({ setCurrentDate, currentDate }: Pick<HeaderProps, 'currentDate' | 'setCurrentDate'>) => {
    const formatDate = (date: Date) => {
        const today = new Date();
        if (format(today, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) {
            return 'Hoy';
        } else if (format(subDays(today, 1), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) {
            return 'Ayer';
        } else {
            return format(date, 'eee., d MMMM', { locale: es });
        }
    };

    return (
        <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Goals</Text>
            <Text style={styles.headerSubtitleText}>{formatDate(currentDate)}</Text>
        </View>
    );
};