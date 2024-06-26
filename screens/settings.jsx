// screens/SettingsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../screens/ThemeContext';

const settings = () => {
  const { isDark, colors, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Settings</Text>
      <TouchableOpacity style={[styles.item, { borderBottomColor: colors.border }]}>
        <Text style={[styles.itemText, { color: colors.text }]}>Language</Text>
        <FontAwesome name="angle-right" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, { borderBottomColor: colors.border }]}>
        <Text style={[styles.itemText, { color: colors.text }]}>My Profile</Text>
        <FontAwesome name="angle-right" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, { borderBottomColor: colors.border }]}>
        <Text style={[styles.itemText, { color: colors.text }]}>Contact Us</Text>
        <FontAwesome name="angle-right" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, { borderBottomColor: colors.border }]}>
        <Text style={[styles.itemText, { color: colors.text }]}>Change Password</Text>
        <FontAwesome name="angle-right" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, { borderBottomColor: colors.border }]}>
        <Text style={[styles.itemText, { color: colors.text }]}>Privacy Policy</Text>
        <FontAwesome name="angle-right" size={24} color={colors.text} />
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={[styles.itemText, { color: colors.text }]}>Theme</Text>
        <Switch
          trackColor={{ false: colors.switchTrack, true: colors.switchTrack }}
          thumbColor={colors.switchThumb}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default settings;
