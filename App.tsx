import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				<Routes />
			</View>
		</SafeAreaProvider>
	);
}
