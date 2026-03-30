import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SPACING, RADIUS, SERVICE_CATEGORIES } from '../utils/constants';
import { MOCK_SERVICES } from '../data/mockData';
import CategoryCard from '../components/CategoryCard';
import EmergencyButton from '../components/EmergencyButton';
import ServiceProviderCard from '../components/ServiceProviderCard';

/**
 * HomeScreen Component
 * Main entry point with search, categories, and featured services
 */
const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get filtered services based on category
  const filteredServices = selectedCategory
    ? MOCK_SERVICES.filter(s => s.category === selectedCategory)
    : MOCK_SERVICES.slice(0, 3); // Show first 3 if no category selected

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>👋 Hello!</Text>
          <Text style={styles.subGreeting}>Find the right service today</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
            placeholderTextColor={COLORS.TEXT_SECONDARY}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Emergency Button */}
        <EmergencyButton />

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {SERVICE_CATEGORIES.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.name}
                onPress={() =>
                  setSelectedCategory(
                    selectedCategory === category.name ? null : category.name
                  )
                }
              />
            ))}
          </View>
        </View>

        {/* Featured Services */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {selectedCategory ? selectedCategory : 'Featured'} Services
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.viewAllText}>See All →</Text>
            </TouchableOpacity>
          </View>

          {filteredServices.map(service => (
            <ServiceProviderCard
              key={service.id}
              service={service}
              onPress={() =>
                navigation.navigate('Detail', { service })
              }
            />
          ))}
        </View>

        {/* Bottom Spacing */}
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
    paddingTop: SPACING.MD,
    paddingBottom: SPACING.LG,
  },
  greeting: {
    fontSize: FONTS.SIZES.XL,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  subGreeting: {
    fontSize: FONTS.SIZES.BASE,
    color: COLORS.TEXT_SECONDARY,
    marginTop: SPACING.SM,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.MD,
    marginBottom: SPACING.MD,
    paddingHorizontal: SPACING.MD,
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.LG,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    height: 48,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: SPACING.SM,
  },
  searchInput: {
    flex: 1,
    fontSize: FONTS.SIZES.BASE,
    color: COLORS.TEXT_PRIMARY,
  },
  section: {
    paddingHorizontal: SPACING.MD,
    marginBottom: SPACING.LG,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.MD,
  },
  sectionTitle: {
    fontSize: FONTS.SIZES.LG,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  viewAllText: {
    fontSize: FONTS.SIZES.SM,
    color: COLORS.PRIMARY,
    fontWeight: FONTS.WEIGHTS.BOLD,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SPACING.SM,
  },
  bottomSpacing: {
    height: SPACING.LG,
  },
});

export default HomeScreen;