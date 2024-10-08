import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityScreen from '../Screens/ActivityScreen';
import DietScreen from '../Screens/DietScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../colors';
import AddActivityScreen from '../Screens/AddActivityScreen';
import AddDietScreen from '../Screens/AddDietScreen';
import { AddActivityButton, AddDietButton } from './AddItemButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ActivityStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.header,
      }}
    >
      <Stack.Screen 
        name="ActivityScreen" 
        component={ActivityScreen} 
        options={({ navigation }) => ({
          headerRight: () => <AddActivityButton/>,
          title: 'Activities'
        })}
      />
      <Stack.Screen
        name="AddActivityScreen"
        component={AddActivityScreen}
        options={{ 
          title: 'Add An Activity'
        }}
      />
    </Stack.Navigator>
  );
}

function DietStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.header,
      }}
    >
      <Stack.Screen 
        name="DietScreen" 
        component={DietScreen} 
        options={({ navigation }) => ({
          headerRight: () => <AddDietButton/>,
          title: 'Diet'
        })}
      />
      <Stack.Screen
        name="AddDietScreen"
        component={AddDietScreen}
        options={{ 
          title: 'Add A Diet'
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.header,
      }}
    >
      <Stack.Screen 
        name="SettingsScreen" 
        component={SettingsScreen} 
        options={{ title: 'Settings' }}
      />
      {/* Add more Settings-related screens here if needed */}
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Activities') {
            return <FontAwesome5 name="running" size={size} color={color} />;
          } else if (route.name === 'Diet') {
            return <Ionicons name="fast-food-outline" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <AntDesign name="setting" size={size} color={color} />;
          }
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: colors.highlight,
        tabBarInactiveTintColor: colors.inactive,
        headerShown: false, // Hide the tab navigator's header
      })}
    >
      <Tab.Screen
        name="Activities"
        component={ActivityStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Diet" 
        component={DietStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}