import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemsList from '../Components/ItemsList';
import ThemedSafeAreaView from '../Components/ThemedSafeAreaView';

export default function DietScreen() {
  return (
    <ThemedSafeAreaView>
      <ItemsList type="diet" />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});