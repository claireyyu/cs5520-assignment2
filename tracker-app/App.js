import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Components/TabNavigator';
import colors from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
