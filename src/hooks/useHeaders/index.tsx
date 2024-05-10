import React, { useEffect, useState } from 'react';
import { format, subDays, addDays } from 'date-fns';
import es from 'date-fns/locale/es';
import { Text, TouchableOpacity, View } from 'react-native';
import { constants } from '../../constants/constants';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';

export const useHeaders = ({ navigation }: Props) => {

    const [currentDate, setCurrentDate] = useState(new Date());

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

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.headerLeftButton}
                    onPress={() => setCurrentDate(prevDate => subDays(prevDate, 1))}
                >
                    <Ionicons name="chevron-back" size={15} color="black" />
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>Goals</Text>
                    <Text style={styles.headerSubtitleText}>{formatDate(currentDate)}</Text>
                </View>
            ),
            headerRight: () => {

                const today = new Date();
                const isToday = format(today, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');
                const isYesterday = format(subDays(today, 1), 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');

                if (isToday) {
                    // Render another icon when currentDate is today
                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.headerRigtButton}
                            onPress={() => {
                                // TODO: Add your own logic here
                            }}
                        >
                            <MaterialIcons name="edit" size={18} color="black" />
                        </TouchableOpacity>
                    );
                } else {
                    // Render the "chevron-back" icon when currentDate is not today
                    return (
                        <View
                            style={styles.headerRigtButton}
                        >
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
                                onPress={() => {
                                    if (isYesterday) {
                                        setCurrentDate(today);
                                    } else {
                                        setCurrentDate(prevDate => addDays(prevDate, 1));
                                    }
                                }}
                            >
                                <Ionicons name="chevron-forward" size={15} color="black" />
                            </TouchableOpacity>
                        </View>

                    );
                }
            },
            headerTitleAlign: 'center',
            headerStyle: {
                shadowColor: constants.colors.primary, //  iOS
                borderBottomColor: constants.colors.primary, // Android
                borderBottomWidth: 1, //  Android
                backgroundColor: constants.colors.primary,
            },

        });
    }, [currentDate]);



}



