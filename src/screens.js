import { Navigation } from 'react-native-navigation'

import Home from './Home'
import Initializing from './Initializing'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Screen2 from './Screen2'

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Initializing', () => Initializing)
  Navigation.registerComponent('SignIn', () => SignIn)
  Navigation.registerComponent('SignUp', () => SignUp)
  Navigation.registerComponent('Screen2', () => Screen2)
}