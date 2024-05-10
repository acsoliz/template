import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { format, subDays, addDays } from 'date-fns';
import { styles } from './style';

interface HeaderProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
}



export const GoalsHeaderRight = ({ currentDate, setCurrentDate }: HeaderProps) => {
    const today = new Date();
    const isToday = format(today, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');

    return isToday ? (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.headerRigtButton}
            onPress={() => {
                // TODO: Add your own logic here
            }}
        >
            <MaterialIcons name="edit" size={18} color="black" />
        </TouchableOpacity>
    ) : (
        <View style={styles.headerRigtButton}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setCurrentDate(today)}
                style={{
                    marginRight: 20,
                    // marginLeft: 10,
                }}
            >
                <Ionicons name="today-outline" size={15} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setCurrentDate(prevDate => addDays(prevDate, 1))}
            >
                <Ionicons name="chevron-forward" size={15} color="black" />
            </TouchableOpacity>
        </View>
    );
};