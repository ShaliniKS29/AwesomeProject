import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedGame, setSelectedGame] = useState('');

  const startGame = () => {
    if (selectedGame !== '') {
      navigation.navigate(selectedGame);
    }
  };

  const selectGame = (game) => {
    setSelectedGame(game);
  };

  const viewLeaderboard = () => {
    navigation.navigate('LeaderBoard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.puzzleButton}>
        <Text style={styles.puzzleText}>WORDS PUZZLE</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, selectedGame === 'Animal' && styles.selectedButton]}
        onPress={() => selectGame('Animal')}
      >
        <Text style={styles.text}>Animals</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selectedGame === 'Countries' && styles.selectedButton]}
        onPress={() => selectGame('Countries')}
      >
        <Text style={styles.text}>Countries</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selectedGame === 'Fruit' && styles.selectedButton]}
        onPress={() => selectGame('Fruit')}
      >
        <Text style={styles.text}>Fruits</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startButton} onPress={startGame}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30 }} onPress={viewLeaderboard}>
        <Text style={styles.scoreText}>Leadersboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'black',
    borderWidth:1,
    margin:20
  },
  button: {
    borderColor:'black',
    borderWidth:1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 50,
    marginTop: '10%',
  },
  selectedButton: {
    backgroundColor: 'grey'
  },
  puzzleButton: {
    backgroundColor: '#CAF1F1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    marginTop: '-20%',
  },
  startButton: {
    backgroundColor: '#F1CAED',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 50,
    marginTop: '10%',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  puzzleText: {
    color: 'black',
    fontSize: 25,
    fontWeight:'bold'
  },
  startText: {
    color: 'black',
    fontSize: 16,
  },
  scoreText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'bold'
  },
});

export default HomeScreen;
