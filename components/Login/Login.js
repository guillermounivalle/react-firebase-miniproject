import React from 'react';
import AppLoading  from 'expo-app-loading';
import { Container, Text, Form, Item, Input, Header, Left, Right, Icon, 
         Button, Body, Title, Content, Footer, FooterTab  } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//Navegación

//Permite pasar parametros por medio de props
import { createStackNavigator } from '@react-navigation/stack';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Declaramos lo que vamos a usar. Luego lo editamos para que los estados queden en un reducer
            isReady: false,
            email: '',
            password: '' 
        };
    }
    

    //Método login
    login = () => {
        console.log('Es presionado')
        const email = this.state.email;
        const password = this.state.password;
        // Usamos fetch para las peticiones
        fetch('localhost:3000/users/login', {
            method:'POST',
            headers:{
                'Accep': 'application/json',
                'Content-Type': 'application/json'
            },
            //Serializamos los datos
            body: JSON.stringify({
                email: email,
                password: password
            })
        //Con el then obtenemos la respuesta de la petición    
        }).then((response)=> response.json())
        .then((responseJson) => {
            alert(responseJson);
            console.log('Positivo ' + responseJson);
        }).catch((err) => {
            alert(err(err));
            console.log('Negativo ' + err);
        })
    };
    
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }
    
    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input 
                                placeholder="Username" 
                                onChangeText={email => this.setState.email}/>
                        </Item>
                        <Item last>
                            <Input 
                                placeholder="Password"
                                onChangeText={password => this.setState.password}/>
                        </Item>
                        <Button color="purple" onPress = {() => this.login()}>
                            <Text>Login</Text>
                        </Button>    
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                          <Text>Footer</Text>
                        </Button>       
                    </FooterTab>
                </Footer>
            </Container>    
        );
    }
}
export default Login;