import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemsList from '../Components/ItemsList';
import { useTheme } from '../Context/ThemeProvider';
import ThemedSafeAreaView from '../Components/ThemedSafeAreaView';

export default function ActivityScreen() {

  return (
    <ThemedSafeAreaView>
      <ItemsList type="activities" />
    </ThemedSafeAreaView>
  );
}
