import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { subDays } from 'date-fns';
import { styles } from './style';

interface HeaderProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
}



export const GoalsHeaderLeft = ({ currentDate, setCurrentDate }: HeaderProps) => (
    <TouchableOpacity
        activeOpacity={0.8}
        style={styles.headerLeftButton}
        onPress={() => setCurrentDate(subDays(currentDate, 1))}
    >
        <Ionicons name="chevron-back" size={15} color="black" />
    </TouchableOpacity>
);