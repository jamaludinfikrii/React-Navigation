import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Content, List, ListItem, Text,Left , Right } from 'native-base';


export default class ListEmployee extends Component {
    state = { data : {
        1 : {nama : 'Fikri' , shift : 'Tue'},
        2 : {nama : 'Seto' , shift : 'Wed'},
        3 : {nama : 'Andi' , shift : 'Sat'},
        4 : {nama : 'Steve' , shift : 'Sun'},
    }   
    }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            { Object.keys(this.state.data).map(val => {
                return(
                    <ListItem>
                        <Left>
                            <Text>{this.state.data[val].nama}</Text>
                        </Left>
                        <Right>
                            <Icon name='chevron-right' size={24}/>
                        </Right>
                    </ListItem>
                )
            })
                
            }
          </List>
        </Content>
      </Container>
    );
  }
}