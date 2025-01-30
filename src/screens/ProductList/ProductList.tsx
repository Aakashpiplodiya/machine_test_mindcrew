import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Easing,
  Text,
} from 'react-native';

import {textStrings} from '../../utils/textStrings';
import ProductCard from '../../components/ProductCard';
import {INITIAL_PRODUCTS} from '../../utils/data';
import {styles} from './styles';
import EmptyCard from '../../components/EmptyCard';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sorted, setSorted] = useState<boolean>(false);
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const emptyCardOpacity = new Animated.Value(0);

  useEffect(() => {
    const initialQuantities: {[key: number]: number} = {};
    INITIAL_PRODUCTS.forEach(product => {
      initialQuantities[product.id] = product.quantity || 0;
    });
    setQuantities(initialQuantities);
  }, []);

  const updateQuantity = (id: number, type: 'increase' | 'decrease') => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + (type === 'increase' ? 1 : -1)),
    }));
  };

  let displayedProducts = INITIAL_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (sorted) {
    displayedProducts = [...displayedProducts].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }

  useEffect(() => {
    if (displayedProducts.length === 0) {
      emptyCardOpacity.setValue(-300);
      Animated.timing(emptyCardOpacity, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [displayedProducts]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TextInput
            style={styles.searchInput}
            placeholder={textStrings.searchPlaceholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => setSorted(!sorted)}>
            <Text style={styles.buttonText}>
              {sorted
                ? textStrings.resetButtonText
                : textStrings.sortButtonText}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={displayedProducts}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={({item}) => (
            <ProductCard
              item={{...item, quantity: quantities[item.id] || 0}}
              updateQuantity={updateQuantity}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyCard emptyCardOpacity={emptyCardOpacity} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
