import React from 'react';
import AppNavigator from './AppNavigator';
import {View, Text} from 'react-native';

  class App1 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        possibleFriends: [
          'Allie',
          'Gator',
          'Lizzie',
        ],
        currentFriends: [],
      }
    }

    addFriend = (index) => {
      const {
        currentFriends,
        possibleFriends,
      } = this.state

      // Pull friend out of possibleFriends
      const addedFriend = possibleFriends.splice(index, 1)

      // And put friend in currentFriends
      currentFriends.push(addedFriend)

      // Finally, update our app state
      this.setState({
        currentFriends,
        possibleFriends,
      })
    }

    render() {
      return (
        <View>
            <View>
                <Text>hello</Text>
            </View>
            <AppNavigator
            screenProps={ {
                currentFriends: this.state.currentFriends,
                possibleFriends: this.state.possibleFriends,
                addFriend: this.addFriend,
            } }
            />
        </View>
      );
    }
  }

  export default App1