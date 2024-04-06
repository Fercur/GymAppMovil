import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Login } from './src/screens/Login';
import { Registro } from './src/screens/Registro';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    
      <PaperProvider>
        <Registro/>
      </PaperProvider>
    
  );
}


