import React, { Component } from 'react';
import {Text ,Container, Header, Content, Form, Item, Input, Label,Button ,Picker,Left,Right } from 'native-base';
export default class FloatingLabelExample extends Component {
    state = {selected : 'Monday'}
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item>
                <Left>
                    <Label>Select Day</Label>
                </Left>
                <Right>
                    <Picker 
                        style={{ width:120}}  
                        mode="dropdown"
                        selectedValue={this.state.selected}
                        onValueChange={(value) => this.setState({selected : value})}>
                    <Picker.Item label='Monday' value='Monday' />
                    <Picker.Item label='Tuesday' value='Tuesday' />
                    <Picker.Item label='Wednesday' value='Wednesday' />
                    <Picker.Item label='Thursday' value='Thursday' />
                    <Picker.Item label='Friday' value='Friday' />
                    </Picker>
                </Right>
            </Item>
            <Button style={{marginTop : 20, marginHorizontal : 15}} block>
                <Text>Add Employee</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
