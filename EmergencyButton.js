import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS } from '../utils/constants';

/**
 * EmergencyButton Component
 * High-visibility emergency service button
 */
const EmergencyButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    Alert.alert(
      'Emergency Help',
      'Connecting you with the nearest emergency service provider...',
      [{ text: 'OK', onPress: () => setIsPressed(false) }]
    );
  };

  return (
    <TouchableOpacity
      style={[styles.button, isPressed && styles.buttonPressed]}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <Text style={styles.icon}>🆘</Text>
      <Text style={styles.text}>Emergency Help</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.ACCENT,
    borderRadius: RADIUS.LG,
    paddingVertical: SPACING.MD,
    paddingHorizontal: SPACING.LG,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.MD,
    marginVertical: SPACING.MD,
    shadowColor: COLORS.ACCENT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
  },
  icon: {
    fontSize: 24,
  },
  text: {
    fontSize: FONTS.SIZES.BASE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.CARD_BG,
  },
});

export default EmergencyButton;