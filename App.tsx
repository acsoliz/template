import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { GoalsProvider } from './src/context/GoalsContext';
import { AuthNavigator } from './src/navigator';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {/* <ProductsProvider> */}
      <GoalsProvider>
        {children}
      </GoalsProvider>
      {/* </ProductsProvider> */}
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
