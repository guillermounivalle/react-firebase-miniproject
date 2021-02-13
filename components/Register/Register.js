import React from 'react'
import { Button } from 'native-base';
import { StyleSheet, Text, View, Alert } from 'react-native';



class Register extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="register"
                    onPress={() => this.props.navigation.navigate('Login')}
                    color="purple"/>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register;