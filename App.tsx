import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { GoalsProvider } from './src/context/GoalsContext';
import { ActivitiesProvider } from './src/context/ActivitiesContext';
import { CategoriesProvider } from './src/context/CategoriesContext';
import { AuthNavigator } from './src/navigator';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <GoalsProvider>
        <CategoriesProvider>
          <ActivitiesProvider>
            {children}
          </ActivitiesProvider>
        </CategoriesProvider>
      </GoalsProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AuthNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
