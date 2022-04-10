import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/out/LoginScreen'
import HomeScreen from '../screens/in/HomeScreen'


const AppStack = createNativeStackNavigator()

export default function AppRoutes() {
	return (
		<AppStack.Navigator screenOptions={{ headerShown: false }}>
			<AppStack.Screen name="LoginScreen" component={LoginScreen} />
			<AppStack.Screen name="HomeScreen" component={HomeScreen} />
		</AppStack.Navigator>
	)
}