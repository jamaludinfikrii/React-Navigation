import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label , Body , Title , Button, Text} from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
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
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
            <Button style={{marginTop : 20, marginHorizontal : 15}} block>
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