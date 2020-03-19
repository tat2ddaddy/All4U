import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

export default function App() {
  return (
    <Swiper>
      <View style={styles.container}>
        <Text style={styles.Text}>Hello, Beautiful!</Text>
      </View>
      <View style={styles.container}> 
      <Text style={styles.poemText}>
        As I ponder on the forthcomings,
      </Text>
      <Text style={styles.poemText}>
        and what may come.
      </Text>
      <Text style={styles.poemText}>
        Silence...
      </Text>
      <Text style={styles.poemText}>
        For when I think of you,
      </Text>
      <Text style={styles.poemText}>
        a single moment is worth an eternity.
      </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.poemText}>
          This is a test.
        </Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumpurple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 30,
  },
  poemText: {
    fontSize: 20,
    color: 'white'
  }
});
