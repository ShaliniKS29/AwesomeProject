import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CountriesScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState('');
  const [highestScore, setHighestScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [scrambledLetters, setScrambledLetters] = useState([]);
  const animals = ['India', 'Pakisthan', 'Srilanka', 'Australia', 'America'];

  useEffect(() => {
    loadHighestScore();
    chooseRandomAnimal();
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

  const saveHighestScore = async (newHighestScore) => {
    try {
      await AsyncStorage.setItem('highestScore', newHighestScore.toString());
    } catch (error) {
      console.error('Error saving highest score:', error);
    }
  };

  const chooseRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomIndex];
    setAnimalName(selectedAnimal);
    generateScrambledLetters(selectedAnimal);
  };

  const generateScrambledLetters = (word) => {
    const shuffledWord = word.split('').sort(() => Math.random() - 0.5);
    setScrambledLetters(shuffledWord);
  };

  const submitWord = () => {
    const word = selectedLetters.toLowerCase();

    if (word === animalName) {
      let wordScore = 10;
      setScore(score + wordScore);
      if (score + wordScore > highestScore) {
        saveHighestScore(score + wordScore);
      }
      setSelectedLetters('');
      setErrorMessage('');
      chooseRandomAnimal();
      Alert.alert(
        'Congratulations!',
        `You earned 10 points for the correct answer!`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } 
    else {
      setErrorMessage('Incorrect animal name. Please try again.');
      setSelectedLetters('');
    }
  };

  const addToSelectedLetters = (letter) => {
    setSelectedLetters(selectedLetters + letter);
  };

  const clearSelectedLetters = () => {
    setSelectedLetters('');
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
           {errorMessage ? <Text style={{ color: 'red',fontSize:18 }}>{errorMessage}</Text> : null}
      <Text style={{ fontSize: 25, color: 'black' }}>Score: {score}</Text>
      <Text style={{ fontSize: 18, color: 'black',margin:'2%' }}>Unscramble the letters to form an countries name:</Text>
      <View style={styles.puzzleGrid}>
        <View style={styles.row}>
          {selectedLetters.split('').map((letter, index) => (
            <Text key={index} style={styles.selectedLetter}>{letter}</Text>
          ))}
        </View>
        <View style={styles.row}>
          {scrambledLetters.map((letter, index) => (    
            <TouchableOpacity
              key={index}
              style={styles.cell}
              onPress={() => addToSelectedLetters(letter)}
            >
              <Text style={{ color: 'black' }}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{alignSelf:'flex-end',marginEnd:30,marginTop:'10%'}}>
      <Button color={'grey'}   style={{marginBottom:10}} title="Clear" onPress={clearSelectedLetters} />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={submitWord}>
      <Text style={styles.text}>SUBMIT</Text>
    </TouchableOpacity>
 
      <View style={{ alignSelf: 'flex-end', marginEnd: 20,marginTop:'10%' }}>
        <Button color={'grey'} title="End Game" onPress={() => navigation.navigate('LeaderBoard')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:'20%',
    alignItems: 'center',
  },
  puzzleGrid: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap'
  },
  cell: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
  selectedLetter: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 50,
    marginTop:'10%',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default CountriesScreen;
