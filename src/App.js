// In App.js in a new project

import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {connect} from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import AuthScreen from './screen/auth.screen'
import HomeScreen from './screen/home.screen'
import TrendScreen from './screen/trend.screen'
import AddScreen from './screen/add.screen'
import StatisticScreen from './screen/stat.screen'

const Stack = createNativeStackNavigator()

function App(props) {
  //console.log({props})
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {props.auth.isAuth ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Trend" component={TrendScreen} />
            <Stack.Screen name="Entry" component={AddScreen} />
            <Stack.Screen name="Stat" component={StatisticScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={AuthScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const mapStateToProps = state => {
  //console.log({ state })
  return {auth: state.auth}
}

export default connect(mapStateToProps)(App)
