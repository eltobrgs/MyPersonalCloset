import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrendingLooks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOOKS EM ALTA:</Text>

      {/* Looks (Círculos) */}
      <View style={styles.circleContainer}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.circle}></View>
        ))}
      </View>

      {/* Looks (Quadrados) */}
      <View style={styles.squareContainer}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.square}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#80004C',
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E1B8C8',
    },
    squareContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    square: {
        width: 80,
        height: 80,
        backgroundColor: '#E1B8C8',
        marginBottom: 10,
    },
});

export default TrendingLooks;
