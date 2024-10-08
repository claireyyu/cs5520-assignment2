import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext'; // You'll need to create this context
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../colors';

const ItemsList = ({ type }) => {
  const { activities, diet } = useContext(AppContext);

  const data = type === 'activities' ? activities : diet;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{item.date}</Text>
        <Text style={styles.data}>{type === 'activities' ? `${item.duration}` : `${item.calories}`}</Text>
      </View>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    margin: 8,
    borderRadius: 5,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginRight: 10,
  },
  dataContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  data: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: colors.background,
    color: colors.primary,
    padding: 5,
    marginHorizontal: 4,
  },
});

export default ItemsList;
