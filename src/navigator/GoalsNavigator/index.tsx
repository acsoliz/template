import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoalScreen } from '../../screens/Goal.screen';
import { GoalsScreen } from '../../screens';

export type GoalsStackParams = {
  GoalsScreen: undefined;
  GoalScreen: { id?: string, name?: string }
}

const Stack = createStackNavigator<GoalsStackParams>();

export const GoalsNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   // cardStyle: {
    //   //   // backgroundColor: 'red',
    //   // },
    //   // headerStyle: {
    //   //   elevation: 0,
    //   //   shadowColor: 'transparent',
    //   // },
    // }}
    >
      <Stack.Screen
        name="GoalsScreen"
        component={GoalsScreen}
      />
      <Stack.Screen
        name="GoalScreen"
        component={GoalScreen}
      />
    </Stack.Navigator>
  );
};
