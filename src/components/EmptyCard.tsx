import React from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {colors} from '../utils/colors';
import {EmptyCardType} from '../interfaces/interfaces';

const EmptyCard = ({emptyCardOpacity}: EmptyCardType) => {
  return (
    <Animated.View
      style={[
        styles.emptyCard,
        {
          transform: [{translateY: emptyCardOpacity}],
        },
      ]}>
      <Text style={styles.emptyText}>No items found</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  emptyCard: {
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
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.emptyBoxTextColor,
  },
});

export default EmptyCard;
