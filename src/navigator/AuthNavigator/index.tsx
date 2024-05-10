/* eslint-disable curly */
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../screens/Login.screen/Login.screen';
import { RegisterScreen } from '../../screens/Register.screen';
import { AuthContext } from '../../context/AuthContext';
import { LoadingScreen } from '../../screens/Loading.screen/Loading.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../BottomTabNavigator';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AuthNavigator = () => {

  const { status } = useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      {
        (status !== 'authenticated')
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )
          : (
            <>
              <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
              {/* <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} /> */}
              {/* <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} /> */}
              {/*<Stack.Screen name="GoalsNavigator" component={GoalsNavigator}/>*/}
              {/* <Stack.Screen name="Home" component={BottomTabNavigator} options={{}} /> */}
            </>
          )
      }
    </Stack.Navigator>
  );
};
