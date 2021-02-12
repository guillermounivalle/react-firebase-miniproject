import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Navegación entre componentes 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importando componentes
import HomeScreen from './components/HomeScreen/HomeScreen';
import Maps from './components/Maps/maps';

//Creando la variable Stack
const Stack = createStackNavigator();

class App extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
		<Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
		  <Stack.Screen
            name="Maps"
            component={Maps}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;