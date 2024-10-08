import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from '../Screens/ActivityScreen';
import DietScreen from '../Screens/DietScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../colors';

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
      })}
    >
      <Tab.Screen name="Activities" component={ActivityScreen} />
      <Tab.Screen name="Diet" component={DietScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}