import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import VaccinationScreen from './src/components/Vaccination/VaccinationScreen';
// Native Base
import { NativeBaseProvider, extendTheme } from "native-base"


export default function App() {

  return (
    <NativeBaseProvider >

      <VaccinationScreen />
    </NativeBaseProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
