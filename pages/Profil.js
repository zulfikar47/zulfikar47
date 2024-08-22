import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profil = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setUser({
            name: parsedData.name || 'N/A',
            email: parsedData.email || 'N/A',
          });
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  const menuItems = [
    { label: 'My Orders', icon: '📦', value: '12 orders' },
    { label: 'Shipping Addresses', icon: '🏠', value: '3 addresses' },
    { label: 'Payment Methods', icon: '💳', value: 'Visa **34' },
    { label: 'Promocodes', icon: '🎟️', value: 'Special promocodes' },
    { label: 'My Reviews', icon: '⭐', value: 'Reviews for 4 items' },
    { label: 'Settings', icon: '⚙️', value: 'Notifications, password' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.header}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuValue}>{item.value}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#00AA13', 
  },
  header: {
    padding: 20,
    marginTop: 50,
    backgroundColor: '#00AA13', 
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', 
  },
  email: {
    fontSize: 16,
    color: '#ddd', 
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: '#00AA13', 
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
    color: 'black', 
  },
  menuTextContainer: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
  },
  menuValue: {
    fontSize: 14,
    color: '#ddd', 
    marginTop: 5,
  },
});

export default Profil;
