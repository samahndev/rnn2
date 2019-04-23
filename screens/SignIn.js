import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign in screen</Text>
      </View>
    )
  }
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})