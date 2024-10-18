import ItemsList from '../Components/ItemsList';
import ThemedSafeAreaView from '../Components/ThemedSafeAreaView';

export default function ActivityScreen() {

  return (
    <ThemedSafeAreaView>
      <ItemsList type="activities" />
    </ThemedSafeAreaView>
  );
}
