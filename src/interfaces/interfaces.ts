import {Animated} from 'react-native';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  animation: Animated.Value;
}

export interface EmptyCardType {
  emptyCardOpacity: Animated.Value;
}
