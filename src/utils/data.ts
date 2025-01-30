import {Animated} from 'react-native';
import {Product} from '../interfaces/interfaces';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Bread',
    price: 20,
    quantity: 0,
    animation: new Animated.Value(0),
  },
  {
    id: 2,
    name: 'Chips',
    price: 10,
    quantity: 0,
    animation: new Animated.Value(0),
  },
  {
    id: 3,
    name: 'Cake',
    price: 100,
    quantity: 0,
    animation: new Animated.Value(0),
  },
  {
    id: 4,
    name: 'Rice',
    price: 200,
    quantity: 0,
    animation: new Animated.Value(0),
  },
  {
    id: 5,
    name: 'Momos',
    price: 40,
    quantity: 0,
    animation: new Animated.Value(0),
  },
];
