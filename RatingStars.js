import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '../utils/constants';

/**
 * RatingStars Component
 * Displays star rating with review count
 */
const RatingStars = ({ rating, reviews, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <Text
            key={index}
            style={[
              styles.star,
              {
                fontSize: size,
                color:
                  index < fullStars
                    ? '#fbbf24'
                    : index === fullStars && hasHalfStar
                    ? '#fbbf24'
                    : '#cbd5e1',
              },
            ]}
          >
            ★
          </Text>
        ))}
      </View>
      <Text style={styles.ratingText}>
        {rating} ({reviews})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  star: {
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: FONTS.SIZES.SM,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: FONTS.WEIGHTS.MEDIUM,
  },
});

export default RatingStars;