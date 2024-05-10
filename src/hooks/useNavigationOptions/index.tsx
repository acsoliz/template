import { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { GoalsStackParams } from '../../navigator';
import { GoalsHeaderLeft, GoalsHeaderRight, GoalsHeaderTitle } from '../../components';
import { constants } from '../../constants';

interface Props extends StackScreenProps<GoalsStackParams, 'GoalsScreen'> { }

export const useNavigationOptions = (navigation: Props['navigation'], currentDate: Date, setCurrentDate: (date: Date) => void) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <GoalsHeaderLeft setCurrentDate={setCurrentDate} currentDate={currentDate} />,
            headerTitle: () => <GoalsHeaderTitle currentDate={currentDate} setCurrentDate={setCurrentDate} />,
            headerRight: () => <GoalsHeaderRight currentDate={currentDate} setCurrentDate={setCurrentDate} />,
            headerTitleAlign: 'center',
            headerStyle: {
                shadowColor: constants.colors.primary, //  iOS
                borderBottomColor: constants.colors.primary, // Android
                borderBottomWidth: 1, //  Android
                backgroundColor: constants.colors.primary,
            },
        });
    }, [currentDate]);
};