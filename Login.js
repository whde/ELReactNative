import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home/Home'
import Mine from './Mine/Mine'


const navigator = createStackNavigator({
  Home: { screen: Home },
  Mine: { screen: Mine }
})

const Login = createAppContainer(navigator)

export default Login
