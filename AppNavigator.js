import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS } from '../utils/constants';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * HomeStackNavigator
 * Stack navigation for Home tab
 */
const HomeStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen
      name="Detail"
      component={ServiceDetailScreen}
      options={{
        cardStyle: { backgroundColor: COLORS.BACKGROUND },
      }}
    />
  </Stack.Navigator>
);

/**
 * SearchStackNavigator
 * Stack navigation for Search tab
 */
const SearchStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SearchMain" component={SearchResultsScreen} />
    <Stack.Screen
      name="Detail"
      component={ServiceDetailScreen}
      options={{
        cardStyle: { backgroundColor: COLORS.BACKGROUND },
      }}
    />
  </Stack.Navigator>
);

/**
 * BottomTabNavigator
 * Main app navigation with bottom tabs
 */
const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.CARD_BG,
        borderTopColor: COLORS.BORDER,
        borderTopWidth: 1,
        height: 70,
        paddingBottom: 10,
        paddingTop: 10,
      },
      tabBarActiveTintColor: COLORS.PRIMARY,
      tabBarInactiveTintColor: COLORS.TEXT_SECONDARY,
      tabBarLabelStyle: {
        fontSize: FONTS.SIZES.XS,
        fontWeight: FONTS.WEIGHTS.MEDIUM,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>🏠</Text>,
      }}
    />

    <Tab.Screen
      name="Search"
      component={SearchStackNavigator}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>🔍</Text>,
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>👤</Text>,
      }}
    />
  </Tab.Navigator>
);

/**
 * AppNavigator
 * Root navigation container
 */
const AppNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

export default AppNavigator;