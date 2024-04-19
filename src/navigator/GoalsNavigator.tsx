import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoalsScreen } from '../screens/Goals.screen';
import { GoalScreen } from '../screens/Goal.screen';

export type GoalsStackParams = {
  GoalsScreen: undefined;
  GoalScreen: { id?: string, name?: string }
}

const Stack = createStackNavigator<GoalsStackParams>();

export const GoalsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
    >
      <Stack.Screen
        name="GoalsScreen"
        component={GoalsScreen}
        options={{ title: 'Goals' }}
      />
      <Stack.Screen
        name="GoalScreen"
        component={GoalScreen}
      />
    </Stack.Navigator>
  );
};
