import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SPACING, RADIUS } from '../utils/constants';

/**
 * ProfileScreen Component
 * User profile and settings
 */
const ProfileScreen = () => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel' },
      { text: 'Logout', onPress: () => {} },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileAvatar}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
            <Text style={styles.profilePhone}>+1-555-0100</Text>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>📅</Text>
            <Text style={styles.menuTitle}>My Bookings</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❤️</Text>
            <Text style={styles.menuTitle}>Saved Providers</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>⭐</Text>
            <Text style={styles.menuTitle}>Reviews & Ratings</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>🔔</Text>
            <Text style={styles.menuTitle}>Notifications</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuTitle}>Settings</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❓</Text>
            <Text style={styles.menuTitle}>Help & Support</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    paddingHorizontal: SPACING.MD,
    paddingVertical: SPACING.MD,
  },
  headerTitle: {
    fontSize: FONTS.SIZES.XL,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.MD,
    marginBottom: SPACING.LG,
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.LG,
    padding: SPACING.MD,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.MD,
  },
  avatarEmoji: {
    fontSize: 32,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  profileEmail: {
    fontSize: FONTS.SIZES.SM,
    color: COLORS.TEXT_SECONDARY,
    marginTop: SPACING.XS,
  },
  profilePhone: {
    fontSize: FONTS.SIZES.SM,
    color: COLORS.TEXT_SECONDARY,
    marginTop: SPACING.XS,
  },
  editButton: {
    paddingVertical: SPACING.SM,
    paddingHorizontal: SPACING.MD,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: RADIUS.SM,
  },
  editButtonText: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.CARD_BG,
  },
  statsSection: {
    flexDirection: 'row',
    gap: SPACING.MD,
    paddingHorizontal: SPACING.MD,
    marginBottom: SPACING.LG,
  },
  statCard: {
    flex: 1,
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
  statValue: {
    fontSize: FONTS.SIZES.XL,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.PRIMARY,
    marginBottom: SPACING.XS,
  },
  statLabel: {
    fontSize: FONTS.SIZES.SM,
    color: COLORS.TEXT_SECONDARY,
  },
  menuSection: {
    paddingHorizontal: SPACING.MD,
    marginBottom: SPACING.LG,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.MD,
    padding: SPACING.MD,
    marginBottom: SPACING.SM,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: SPACING.MD,
  },
  menuTitle: {
    flex: 1,
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.MEDIUM,
    color: COLORS.TEXT_PRIMARY,
  },
  menuArrow: {
    fontSize: FONTS.SIZES.BASE,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: FONTS.WEIGHTS.BOLD,
  },
  logoutButton: {
    marginHorizontal: SPACING.MD,
    paddingVertical: SPACING.MD,
    backgroundColor: COLORS.ACCENT,
    borderRadius: RADIUS.MD,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.CARD_BG,
  },
  bottomSpacing: {
    height: SPACING.LG,
  },
});

export default ProfileScreen;