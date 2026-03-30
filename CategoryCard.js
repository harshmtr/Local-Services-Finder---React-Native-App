import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS } from '../utils/constants';

/**
 * CategoryCard Component
 * Interactive category selector with icon
 */
const CategoryCard = ({ category, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        isSelected && styles.cardSelected,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.icon}>{category.icon}</Text>
      <Text
        style={[
          styles.name,
          isSelected && styles.nameSelected,
        ]}
        numberOfLines={1}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: SPACING.LG,
    paddingHorizontal: SPACING.MD,
    borderRadius: RADIUS.MD,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.SM,
    marginBottom: SPACING.MD,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardSelected: {
    backgroundColor: COLORS.PRIMARY,
  },
  icon: {
    fontSize: 32,
    marginBottom: SPACING.SM,
  },
  name: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
  },
  nameSelected: {
    color: COLORS.CARD_BG,
  },
});

export default CategoryCard;