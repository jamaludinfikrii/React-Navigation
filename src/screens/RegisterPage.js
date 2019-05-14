import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label , Body , Title , Button,Icon, Text} from 'native-base';
import { Fire } from './../support/firebase'
export default class FloatingLabelExample extends Component {
  state = {pass : '' , confirm : ''}

  onBtnRegisterClick = () => {
    const auth = Fire.auth()
    auth.createUserWithEmailAndPassword(this.inputEmail,this.state.pass)
    .then((val) => {
      console.log(val.user.ui)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render() {
    const confirm = this.state.confirm == "" ? 
        <Item floatingLabel last>
          <Label>Confirm Password</Label>
          <Input onChangeText={(val) => this.setState({confirm : val})} />
        </Item> : 
        this.state.confirm !== this.state.pass ?
        <Item floatingLabel last error>
          <Label>Confirm Password</Label>
          <Input onChangeText={(val) => this.setState({confirm : val})} />
          <Icon name='close-circle' />
        </Item> : 
        <Item floatingLabel last success>
          <Label>Confirm Password</Label>
          <Input onChangeText={(val) => this.setState({confirm : val})} />
          <Icon name='checkmark-circle' />
        </Item>
    return (
      <Container>
        <Header>
                <Body>
                    <Title style={{marginLeft : 15}}>Register</Title>
                </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => this.inputEmail = text } />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText = {(val) => this.setState({pass : val})} />
            </Item>
            {confirm}
            <Button style={{marginTop : 20, marginHorizontal : 15}} onPress={this.onBtnRegisterClick} block>
                <Text>Register</Text>
            </Button>

            <View style={{flexDirection : 'row', justifyContent: "center", marginTop : 30}}>
                <Text onPress={() => this.props.navigation.navigate('login')}>Sudah Punya Akun? Login</Text>
            </View>
                
          </Form>
        </Content>
      </Container>
    );
  }
}