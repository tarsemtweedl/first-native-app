import React, { Component } from 'react';
import { AppRegistry, Image, View, Text } from 'react-native';

class Bananas extends Component {
  constructor(props){
    super(props);
    this.state = { 'isShowingText': true }

    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 5000);
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    if(!this.state.isShowingText) {
      return null;
    }
    return (
      <View>
        <Text> {this.props.name} </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text> {this.props.text} </Text>
      </View>
    );
  }
}

export default Bananas;