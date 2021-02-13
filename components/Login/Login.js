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
            isReady: false,
        };
    }
    
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
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
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