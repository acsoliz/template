
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './src/navigations/bottomTabNavigator';
import { AuthStack } from './src/navigations/auth';
import { AuthProvider, useAuth } from './src/feature/auth/context';
import React, { useEffect } from 'react';

type RootStackParamList = {
  Home: undefined,
  About: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  const { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   console.log('en use Effect, isAuthenticatedd::', isAuthenticated);
  // }, [isAuthenticated]);


  return (
    <AuthProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <NavigationContainer>
          { //el valor de isAuthenticated la primera vez es false,   
            isAuthenticated ? // por que cuando cambia el valor de isAuthenticated no esta funcionando que se renderice el siguiente codigo?
              <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="Home"
                  component={BottomTabNavigator}
                  options={{}}
                />


              </Stack.Navigator>

              : <AuthStack />
          }
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

  },
  buttonText: {

  }
});