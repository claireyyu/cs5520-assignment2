import ItemsList from '../Components/ItemsList';
import ThemedSafeAreaView from '../Components/ThemedSafeAreaView';

export default function DietScreen() {
  return (
    <ThemedSafeAreaView>
      <ItemsList type="diet" />
    </ThemedSafeAreaView>
  );
}
