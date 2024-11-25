import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';



export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();


  return (
    <View 
      style={styles.tabbar}
      accessibilityRole="tab"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {options.tabBarIcon?.({ 
              focused: isFocused, 
              color: isFocused ? colors.primary : colors.text,
              size: 50
            })}
            <Text style={[
              styles.label,
              { color: isFocused ? colors.primary : colors.text }
            ]}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    height: 83,
    paddingTop: 8,      // Reduced top padding
    paddingBottom: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  // Changed back to center
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    color: '#ffffff',
  }
});