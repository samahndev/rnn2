import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'
import { Navigation } from 'react-native-navigation'

class WelcomeScreen extends Component {
  goToScreen = (screenName) => {
    console.log('lolss')
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign up" onPress={() => this.goToScreen('SignUp')} />
        <Button title="Sign in" onPress={() => this.goToScreen('SignIn')} />
      </View>
    )
  }
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})