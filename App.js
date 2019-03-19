import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput} from 'react-native';
import Bananas from './Bananas';

const styles = StyleSheet.create({
  mainclr:{
    color:'blue',
    textAlign:'center'
  }
})
class App extends Component{
  constructor(props){
    super(props)
    this.state = {"name":"Lucky"  
  }
  

  }
  
  change = () =>{
    this.setState({name:"Tarsem Jangra", text:''})
  }
  render(){
    console.log('hello');
    return(
      <View className="App">
        <Text style={styles.mainclr}>Hello i am {this.state.name} </Text>
        <Button
        onPress={this.change}
        title="React Native"
        accessibilityLabel="Learn more about React Native"
        />
        <Bananas name="Anoop"/>
        <Bananas text="I Love this blink" />
        <TextInput
        style={{height:40}}
        placeholder="Type here something"
        onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

export default App