import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const transactions = [
  { id: '1', date: '2024-08-15', amount: '$25.00', description: 'Grocery Store' },
  { id: '2', date: '2024-08-16', amount: '$15.00', description: 'Online Shopping' },
  { id: '3', date: '2024-08-17', amount: '$30.00', description: 'Restaurant' },
  { id: '4', date: '2024-08-18', amount: '$45.00', description: 'Electronics' },
  { id: '5', date: '2024-08-19', amount: '$10.00', description: 'Coffee Shop' },
  { id: '6', date: '2024-08-20', amount: '$60.00', description: 'Books' },
];

const renderTransaction = ({ item }) => (
  <View style={styles.transactionCard}>
    <Text style={styles.transactionDate}>{item.date}</Text>
    <Text style={styles.transactionDescription}>{item.description}</Text>
    <Text style={styles.transactionAmount}>{item.amount}</Text>
  </View>
);

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 60,
  },
  list: {
    flexGrow: 1,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    width: viewportWidth - 32, 
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#00AA13',
    marginTop: 4,
  },
});

export default History;
