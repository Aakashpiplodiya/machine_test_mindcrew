import React from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {textStrings} from '../utils/textStrings';
import {Product} from '../interfaces/interfaces';

interface ProductCardProps {
  item: Product;
  updateQuantity: (id: number, type: 'increase' | 'decrease') => void;
}

const ProductCard = ({item, updateQuantity}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹{item.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          disabled={item.quantity === 0 ? true : false}
          style={[
            styles.button,
            {
              backgroundColor:
                item.quantity === 0 ? 'grey' : colors.buttonBackground,
            },
          ]}
          onPress={() => updateQuantity(item.id, 'decrease')}>
          <Text style={styles.buttonText}>{textStrings.minusButton}</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            transform: [{translateY: item.animation}],
          }}>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </Animated.View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.buttonBackground}]}
          onPress={() => updateQuantity(item.id, 'increase')}>
          <Text style={styles.buttonText}>{textStrings.plusButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: colors.shadowColor,
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: colors.shadowRadius,
    height: 150,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: colors.productPriceColor,
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default ProductCard;
