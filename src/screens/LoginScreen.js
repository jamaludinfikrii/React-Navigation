import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label , Body , Title , Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
                <Body>
                    <Title style={{marginLeft : 15}}>{this.props.bebas}</Title>
                </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button style={{marginTop : 20, marginHorizontal : 15}} block>
                <Text>Login</Text>
            </Button>

           

            <View style={{flexDirection : 'row',justifyContent : 'center', marginTop : 15}}>
                <View style={{height : 60 , width : 60 }}>
                    <Icon name='facebook' size={40} />
                </View>
                <View style={{height : 60 , width : 60  }}>
                    <Icon name='google' size={40} />
                </View>
                <View style={{height : 60 , width : 60  }}>
                    <Icon name='twitter' size={40}/>
                </View>
            </View>
                

            <View style={{flexDirection : 'row', justifyContent: "center", marginTop : 30}}>
                <Text onPress={() => this.props.navigation.navigate('register')}>Belum Punya Akun? Register</Text>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    bebas : state.auth.email
  }
}



export default connect(mapStateToProps)(LoginScreen)