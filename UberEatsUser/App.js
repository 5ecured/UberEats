import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import AuthContextProvider from './src/context/AuthContext';

Amplify.configure({ ...config, Analytics: { disabled: true } })

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App)