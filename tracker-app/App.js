import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Components/TabNavigator';
import colors from './colors';
import { AppProvider } from './Context/AppProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddActivityScreen from './Screens/AddActivityScreen';
import AddDietScreen from './Screens/AddDietScreen';
import { ThemeProvider } from './Context/ThemeProvider';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: colors.primary,
                },
                headerTintColor: colors.header,
              }}
            >
              <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="AddActivityScreen" component={AddActivityScreen} options={{ headerTitle: 'Add An Activity', headerBackTitleVisible: false}} />
              <Stack.Screen name="AddDietScreen" component={AddDietScreen} options={{ headerTitle: 'Add A Diet', headerBackTitleVisible: false }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
