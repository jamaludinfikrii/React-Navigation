import React, { Component } from 'react';
import { View } from 'react-native'
import {Text ,Container, Header, Content, Form, Item, Input, Label,Button ,Picker,Left,Right } from 'native-base';
export default class FloatingLabelExample extends Component {
    state = {selected : 'Monday',data : {
        1 : {nama : 'Fikri' , shift : 'Tue' , telp : '082227492381'},
        2 : {nama : 'Seto' , shift : 'Wed' , telp : '082227492381'},
        3 : {nama : 'Andi' , shift : 'Sat' ,telp : '082227492381'},
        4 : {nama : 'Steve' , shift : 'Sun', telp : '082227492381'},
    } , idEdit : null}
  render() {
    return (
      <Container>
        <Header />
        <Content>
            <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                <View style={{paddingTop : 15, paddingLeft : 15}}>
                    <Text> Select Data </Text>
                </View>
                <View>
                    <Picker style={{width : 200}} mode ='dropdown' selectedValue={this.state.idEdit} >
                        <Picker.Item label='Select Name' value={null} />
                        {
                            Object.keys(this.state.data).map(val => {
                                return(
                                    <Picker.Item label={this.state.data[val].nama} value={val} />
                                )
                            })
                        }
                    </Picker>
                </View>
            </View>
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
                <Text>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
