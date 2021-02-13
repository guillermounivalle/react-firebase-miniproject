import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Navegación entre componentes 


class HomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>React-Firebase-Miniproject!</Text>
                <Button title="Button" 
                    onPress={() => this.props.navigation.navigate('Login')}
                    color = "purple"/>
                <StatusBar style="auto" />
            </View>
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

export default HomeScreen;