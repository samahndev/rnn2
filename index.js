// /**
//  * @format
//  */

import { Navigation } from 'react-native-navigation'

import { registerScreens } from './src/screens'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    }
  })
})

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import { Navigation } from 'react-native-navigation'

// import Welcome from './screens/Welcome'
// import SignUp from './screens/SignUp'
// import SignIn from './screens/SignIn'

// Navigation.registerComponent('Welcome', () => Welcome)
// Navigation.registerComponent('SignUp', () => SignUp)
// Navigation.registerComponent('SignIn', () => SignIn)

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         id: 'AppStack',
//         children: [
//           {
//             component: {
//               name: 'Welcome',
//               options: {
//                 topBar: {
//                   title: {
//                     text: 'Welcome'
//                   }
//                 }   
//               }
//             }
//           }
//         ]
//       }
//     }
//   })
// })