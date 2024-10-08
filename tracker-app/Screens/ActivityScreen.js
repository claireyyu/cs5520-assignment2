import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text>Activity Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});