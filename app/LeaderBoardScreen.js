// screens/LeaderboardScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LeaderboardScreen = ({navigation}) => {
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    loadHighestScore();
  }, []);

  const loadHighestScore = async () => {
    try {
      const storedHighestScore = await AsyncStorage.getItem('highestScore');
      if (storedHighestScore !== null) {
        setHighestScore(parseInt(storedHighestScore));
      }
    } catch (error) {
      console.error('Error loading highest score:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Highest Score:</Text>
      <Text style={styles.highestScore}> {highestScore}</Text>
      <View style={{ alignItems:'center', marginTop: 20 }}>
        <Button color={'grey'} title="Go To Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  highestScore: {
    fontSize: 30,
    marginBottom: 10,
    color:'black'
  },
});

export default LeaderboardScreen;
