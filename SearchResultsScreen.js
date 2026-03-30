import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SPACING, RADIUS } from '../utils/constants';
import { MOCK_SERVICES, searchServices } from '../data/mockData';
import ServiceProviderCard from '../components/ServiceProviderCard';
import { SkeletonCard } from '../components/LoadingSkeleton';

/**
 * SearchResultsScreen Component
 * Display search results with filtering options
 */
const SearchResultsScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState(route.params?.query || '');
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('distance'); // 'distance', 'rating', 'price'

  // Simulate search delay
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const results = searchQuery.trim()
        ? searchServices(searchQuery)
        : MOCK_SERVICES;

      // Sort results
      let sorted = [...results];
      if (sortBy === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'distance') {
        sorted.sort((a, b) => a.distance - b.distance);
      }

      setFilteredServices(sorted);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, sortBy]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Results</Text>
        <View style={styles.placeholder} />
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
          autoFocus
        />
        {searchQuery && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Sort Options */}
      <View style={styles.sortContainer}>
        {['distance', 'rating'].map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.sortButton,
              sortBy === option && styles.sortButtonActive,
            ]}
            onPress={() => setSortBy(option)}
          >
            <Text
              style={[
                styles.sortButtonText,
                sortBy === option && styles.sortButtonTextActive,
              ]}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Results */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          {[1, 2, 3].map(i => (
            <SkeletonCard key={i} />
          ))}
        </View>
      ) : filteredServices.length > 0 ? (
        <FlatList
          data={filteredServices}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ServiceProviderCard
                service={item}
                onPress={() =>
                  navigation.navigate('Detail', { service: item })
                }
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🔍</Text>
          <Text style={styles.emptyTitle}>No services found</Text>
          <Text style={styles.emptyText}>
            Try adjusting your search query
          </Text>
        </View>
      )}
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
  clearButton: {
    fontSize: FONTS.SIZES.BASE,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: FONTS.WEIGHTS.BOLD,
    marginLeft: SPACING.SM,
  },
  sortContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.MD,
    gap: SPACING.SM,
    marginBottom: SPACING.MD,
  },
  sortButton: {
    paddingVertical: SPACING.SM,
    paddingHorizontal: SPACING.MD,
    borderRadius: RADIUS.MD,
    backgroundColor: COLORS.CARD_BG,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },
  sortButtonActive: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  sortButtonText: {
    fontSize: FONTS.SIZES.SM,
    fontWeight: FONTS.WEIGHTS.MEDIUM,
    color: COLORS.TEXT_PRIMARY,
  },
  sortButtonTextActive: {
    color: COLORS.CARD_BG,
  },
  loadingContainer: {
    flex: 1,
    paddingHorizontal: SPACING.MD,
    paddingTop: SPACING.MD,
  },
  listContent: {
    paddingHorizontal: SPACING.MD,
    paddingTop: SPACING.MD,
  },
  cardContainer: {
    marginBottom: SPACING.MD,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.MD,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: SPACING.MD,
  },
  emptyTitle: {
    fontSize: FONTS.SIZES.LG,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: SPACING.SM,
  },
  emptyText: {
    fontSize: FONTS.SIZES.BASE,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },
});

export default SearchResultsScreen;