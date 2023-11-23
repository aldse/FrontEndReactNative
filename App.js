import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { UtilsContext } from './context';
import { StyleSheet, Text  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {Condominio} from './Condominio';
import Funcionarios from './Funcionarios';
import Moradores from './Moradores';
import Visitantes from './Visitantes';
import CoisasCondominio from './CoisasCondominio';
import Cadastro from './Cadastro';
import Login from './Login';

import {Provider} from 'react-native-paper';

export default function App() {
  const [utils, setUtils] = useState({users:[]})
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
      <Provider>
      <Stack.Navigator>
          <Stack.Screen name="Condominio" options={{headerShown: false}} component={Condominio} />
          <Stack.Screen name="CoisasCondominio" options={{headerShown: false}} component={CoisasCondominio} />
          <Stack.Screen name="Funcionarios" options={{headerShown: false}} component={Funcionarios} />
          <Stack.Screen name="Moradores" options={{headerShown: false}} component={Moradores} />
          <Stack.Screen name="Visitantes" options={{headerShown: false}} component={Visitantes} />
          <Stack.Screen name="Cadastro" options={{headerShown: false}} component={Cadastro} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        </Stack.Navigator>
      </Provider>
        
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});