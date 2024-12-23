import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Biblioteca de ícones

interface PreferenceItemProps {
  label: string;
  value: string;
  icon?: string;
}

const PreferenceItem: React.FC<PreferenceItemProps> = ({ label, value, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        {icon && <FontAwesome name={icon as keyof typeof FontAwesome.glyphMap} size={16} color="#7A4B57" style={styles.icon} />}
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#4E2A33',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  value: {
    fontSize: 16,
    color: '#7A4B57',
  },
});

export default PreferenceItem;
