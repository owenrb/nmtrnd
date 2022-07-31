/**
 * @format
 */
import 'react-native-gesture-handler'

import React from 'react'
import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import {Provider} from 'react-redux'

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './src/store/slice/auth.slice'
import trendReducer from './src/store/slice/trend.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    trend: trendReducer,
  },
})

const reduxApp = () => (
  <Provider store={store}>
    <PaperProvider theme={DefaultTheme}>
      <App />
    </PaperProvider>
  </Provider>
)

AppRegistry.registerComponent(appName, () => reduxApp)
