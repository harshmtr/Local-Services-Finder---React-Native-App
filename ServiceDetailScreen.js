import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SPACING, RADIUS } from '../utils/constants';
import RatingStars from '../components/RatingStars';

/**
 * ServiceDetailScreen Component
 * Detailed service provider information
 */
const ServiceDetailScreen = ({ navigation, route }) => {
  const service = route.params.service;
  const [isBooked, setIsBooked] = useState(false);

  const handleCall = () => {
    Linking.openURL(`tel:${service.phone}`);
  };

  const handleBook = () => {
    Alert.alert(
      'Book Service',
      `Schedule a service with ${service.name}?`,
      [
        { text: 'Cancel', onPress: () => {} },
        {
          text: 'Confirm',
          onPress: () => {
            setIsBooked(true);
            Alert.alert('Success', 'Service booked! Check your email for confirmation.');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Service Details</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>{service.image}</Text>
          </View>

          <Text style={styles.name}>{service.name}</Text>

          {service.verified && (
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓ Verified Professional</Text>
            </View>
          )}

          <RatingStars
            rating={service.rating}
            reviews={service.reviews}
            size={20}
          />
        </View>

        {/* Quick Info Cards */}
        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>📍</Text>
            <Text style={styles.infoLabel}>Distance</Text>
            <Text style={styles.infoValue}>{service.distance} km away</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>⏱️</Text>
            <Text style={styles.infoLabel}>Response</Text>
            <Text style={styles.infoValue}>{service.responseTime}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>💼</Text>
            <Text style={styles.infoLabel}>Experience</Text>
            <Text style={styles.infoValue}>{service.experience}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>💰</Text>
            <Text style={styles.infoLabel}>Pricing</Text>
            <Text style={styles.infoValue}>{service.price}</Text>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{service.description}</Text>
        </View>

        {/* Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <View
            style={[
              styles.statusBadge,
              service.available ? styles.statusAvailable : styles.statusUnavailable,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                service.available && styles.statusTextAvailable,
              ]}
            >
              {service.available ? '🟢 Available Now' : '🔴 Unavailable'}
            </Text>
          </View>
        </View>

        {/* Booking Status */}
        {isBooked && (
          <View style={styles.successMessage}>
            <Text style={styles.successIcon}>✅</Text>
            <Text style={styles.successText}>Service booked successfully!</Text>
          </View>
        )}

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={handleCall}
        >
          <Text style={styles.buttonIcon}>📞</Text>
          <Text style={styles.secondaryButtonText}>Call Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleBook}
          disabled={isBooked}
        >
          <Text style={styles.buttonIcon}>📅</Text>
          <Text style={styles.primaryButtonText}>
            {isBooked ? 'Booked ✓' : 'Book Service'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.MD,
    paddingVertical: SPACING.MD,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  backButton: {
    fontSize: FONTS.SIZES.XL,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  headerTitle: {
    fontSize: FONTS.SIZES.LG,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  placeholder: {
    width: FONTS.SIZES.XL,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: SPACING.LG,
    paddingHorizontal: SPACING.MD,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.MD,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarEmoji: {
    fontSize: 56,
  },
  name: {
    fontSize: FONTS.SIZES.XL,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: SPACING.SM,
    textAlign: 'center',
  },
  verifiedBadge: {
    backgroundColor: '#ecfdf5',
    paddingVertical: SPACING.SM,
    paddingHorizontal: SPACING.MD,
    borderRadius: RADIUS.FULL,
    marginBottom: SPACING.MD,
  },
  verifiedText: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.SUCCESS,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SPACING.MD,
    gap: SPACING.MD,
    marginBottom: SPACING.LG,
  },
  infoCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.MD,
    padding: SPACING.MD,
    alignItems: 'center',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: SPACING.SM,
  },
  infoLabel: {
    fontSize: FONTS.SIZES.XS,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: FONTS.WEIGHTS.MEDIUM,
    marginBottom: SPACING.XS,
  },
  infoValue: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: SPACING.MD,
    marginBottom: SPACING.LG,
  },
  sectionTitle: {
    fontSize: FONTS.SIZES.LG,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: SPACING.MD,
  },
  description: {
    fontSize: FONTS.SIZES.BASE,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 24,
  },
  statusBadge: {
    paddingVertical: SPACING.MD,
    paddingHorizontal: SPACING.LG,
    borderRadius: RADIUS.MD,
    backgroundColor: '#fef2f2',
  },
  statusAvailable: {
    backgroundColor: '#ecfdf5',
  },
  statusText: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.ACCENT,
    textAlign: 'center',
  },
  statusTextAvailable: {
    color: COLORS.SUCCESS,
  },
  successMessage: {
    marginHorizontal: SPACING.MD,
    marginBottom: SPACING.LG,
    paddingVertical: SPACING.MD,
    paddingHorizontal: SPACING.LG,
    backgroundColor: '#ecfdf5',
    borderRadius: RADIUS.MD,
    alignItems: 'center',
  },
  successIcon: {
    fontSize: 32,
    marginBottom: SPACING.SM,
  },
  successText: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.SUCCESS,
  },
  bottomSpacing: {
    height: 100,
  },
  actionBar: {
    flexDirection: 'row',
    gap: SPACING.MD,
    padding: SPACING.MD,
    backgroundColor: COLORS.CARD_BG,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
    paddingBottom: SPACING.LG,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: RADIUS.MD,
    paddingVertical: SPACING.MD,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.SM,
    shadowColor: COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.MD,
    paddingVertical: SPACING.MD,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.SM,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  buttonIcon: {
    fontSize: 20,
  },
  primaryButtonText: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.CARD_BG,
  },
  secondaryButtonText: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.PRIMARY,
  },
});

export default ServiceDetailScreen;