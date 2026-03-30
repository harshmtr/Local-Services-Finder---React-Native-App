import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS } from '../utils/constants';
import RatingStars from './RatingStars';

/**
 * ServiceProviderCard Component
 * Displays individual service provider with key info
 */
const ServiceProviderCard = ({ service, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Avatar & Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>{service.image}</Text>
        </View>

        <View style={styles.headerInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {service.name}
            </Text>
            {service.verified && (
              <Text style={styles.verifiedBadge}>✓ Verified</Text>
            )}
          </View>
          <RatingStars rating={service.rating} reviews={service.reviews} />
        </View>
      </View>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.infoPill}>
          <Text style={styles.infoLabel}>Distance</Text>
          <Text style={styles.infoValue}>{service.distance} km</Text>
        </View>

        <View style={styles.infoPill}>
          <Text style={styles.infoLabel}>Price</Text>
          <Text style={styles.infoValue}>{service.price.split('/')[0]}</Text>
        </View>

        {service.available && (
          <View style={[styles.infoPill, styles.availablePill]}>
            <Text style={styles.availableText}>🟢 Available</Text>
          </View>
        )}
      </View>

      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        {service.description}
      </Text>

      {/* Action Arrow */}
      <View style={styles.arrow}>
        <Text style={styles.arrowText}>→</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.LG,
    padding: SPACING.MD,
    marginBottom: SPACING.MD,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    gap: SPACING.MD,
    marginBottom: SPACING.MD,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.MD,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 28,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.SM,
    marginBottom: SPACING.SM,
  },
  name: {
    fontSize: FONTS.SIZES.LG,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    flex: 1,
  },
  verifiedBadge: {
    fontSize: FONTS.SIZES.XS,
    color: COLORS.SUCCESS,
    fontWeight: FONTS.WEIGHTS.BOLD,
  },
  infoRow: {
    flexDirection: 'row',
    gap: SPACING.SM,
    marginBottom: SPACING.MD,
  },
  infoPill: {
    flex: 1,
    paddingVertical: SPACING.SM,
    paddingHorizontal: SPACING.MD,
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: RADIUS.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  availablePill: {
    backgroundColor: '#ecfdf5',
  },
  infoLabel: {
    fontSize: FONTS.SIZES.XS,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: FONTS.WEIGHTS.MEDIUM,
  },
  infoValue: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginTop: 2,
  },
  availableText: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.SUCCESS,
  },
  description: {
    fontSize: FONTS.SIZES.SM,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 20,
    marginBottom: SPACING.MD,
  },
  arrow: {
    position: 'absolute',
    right: SPACING.MD,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  arrowText: {
    fontSize: 24,
    color: COLORS.PRIMARY,
    fontWeight: FONTS.WEIGHTS.BOLD,
  },
});

export default ServiceProviderCard;