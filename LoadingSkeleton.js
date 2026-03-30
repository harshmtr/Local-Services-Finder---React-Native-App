import React, { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../utils/constants';

/**
 * LoadingSkeleton Component
 * Animated skeleton loader for cards
 */
const LoadingSkeleton = ({ width = '100%', height = 20, style }) => {
  const fadeAnimation = new Animated.Value(0.3);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnimation]);

  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width,
          height,
          opacity: fadeAnimation,
        },
        style,
      ]}
    />
  );
};

const SkeletonCard = () => (
  <View style={styles.card}>
    <View style={styles.header}>
      <LoadingSkeleton width={56} height={56} />
      <View style={styles.headerInfo}>
        <LoadingSkeleton height={16} style={{ marginBottom: SPACING.SM }} />
        <LoadingSkeleton height={12} />
      </View>
    </View>
    <LoadingSkeleton height={12} style={{ marginBottom: SPACING.SM }} />
    <LoadingSkeleton height={12} />
  </View>
);

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: RADIUS.SM,
  },
  card: {
    backgroundColor: COLORS.CARD_BG,
    borderRadius: RADIUS.LG,
    padding: SPACING.MD,
    marginBottom: SPACING.MD,
  },
  header: {
    flexDirection: 'row',
    gap: SPACING.MD,
    marginBottom: SPACING.MD,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
});

export { SkeletonCard };
export default LoadingSkeleton;