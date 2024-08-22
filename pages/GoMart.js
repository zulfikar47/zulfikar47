import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const GoMart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const headerImages = [
    require('../assets/catalog-header1.png'),
    require('../assets/catalog-header2.png'),
    require('../assets/catalog-header3.png'),
  ];

  const categories = [
    { id: '1', name: 'Fruits', image: require('../assets/fruits.png'), description: 'Fresh and juicy fruits' },
    { id: '2', name: 'Vegetables', image: require('../assets/vegetables.png'), description: 'Organic and green vegetables' },
    { id: '3', name: 'Dairy', image: require('../assets/dairy.png'), description: 'Milk, cheese, and more' },
    { id: '4', name: 'Snacks', image: require('../assets/snacks.png'), description: 'Tasty snacks for any time' },
    { id: '5', name: 'Beverages', image: require('../assets/beverages.png'), description: 'Refreshing drinks and beverages' },
    { id: '6', name: 'Bakery', image: require('../assets/bakery.png'), description: 'Freshly baked goods and bread' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % headerImages.length;
        carouselRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderHeaderImage = ({ item }) => (
    <Image
      source={item}
      style={styles.headerImage}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GoMart</Text>
      </View>
      <FlatList
        ref={carouselRef}
        data={headerImages}
        renderItem={renderHeaderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.header}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.floor(contentOffsetX / viewportWidth);
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
          }
        }}
      />
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AA13',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  title: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    width: '100%',
    marginBottom: 8, 
    
  },
  headerImage: {
    width: viewportWidth,
    height: 150, 
  },
  carousel: {
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    padding: 4,
    marginVertical: 4,
    width: viewportWidth * 0.45, 
    height: 140,
    justifyContent: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 60,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },
  categoryDescription: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default GoMart;
