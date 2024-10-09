import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityScreen from '../Screens/ActivityScreen';
import DietScreen from '../Screens/DietScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../colors';
import { AddActivityButton, AddDietButton } from './AddItemButton';

const Tab = createBottomTabNavigator();

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
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.header,
      })}
    >
      <Tab.Screen
        name="Activities"
        component={ActivityScreen}
        options={({ navigation }) => ({
          headerRight: () => <AddActivityButton/>,
          title: 'Activities',
        })}

      />
      <Tab.Screen 
        name="Diet" 
        component={DietScreen}
        options={({ navigation }) => ({
          headerRight: () => <AddDietButton/>,
          title: 'Diet',
        })}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}