import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext'; // You'll need to create this context
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../colors';
import Entypo from '@expo/vector-icons/Entypo';


const ItemsList = ({ type }) => {
  const { activities, diet } = useContext(AppContext);

  const data = type === 'activities' ? activities : diet;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.title}>{item.name}</Text>
        {item.isSpecial && <Entypo name="warning" size={16} color="yellow" />}
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{item.date.split(',').map(word => word.trim()).join(' ')}</Text>
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
    padding: 12,
    margin: 8,
    borderRadius: 5,
  },
  itemHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginRight: 10,
    textAlign: 'center',
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
