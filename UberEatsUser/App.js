import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports'

Amplify.configure(config)

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}