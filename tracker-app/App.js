import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Components/TabNavigator';
import colors from './colors';
import { AppProvider } from './Context/AppContext';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
