import { StackNavigationProp } from '@react-navigation/stack';
import { GoalsStackParams } from '../navigator/GoalsNavigator';
import { Goal } from 'c:/Users/Alan/Documents/GitHub/React-Native/e/src/interfaces/appInterfaces'; // Importa el tipo Goal desde el lugar correcto

type GoalScreenNavigationProp = StackNavigationProp<GoalsStackParams, 'GoalsScreen'>;

export const navigateToGoalScreen = (navigation: GoalScreenNavigationProp, item: Goal) => {
    navigation.navigate('GoalScreen', {
        id: item._id,
        name: item.title,
    });
};