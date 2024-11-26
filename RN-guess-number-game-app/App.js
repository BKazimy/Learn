import { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] =  useState([]);

  const [fontsLoading] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoading) {
    return <AppLoading />
  }

  function pickNumberHundler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false); 
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function newGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    console.log("new game!")
  }

  // function roundCountHandler() {
  //   setGuessRounds(guessRounds + 1);
  // }

  let screen = <StartGameScreen pickedNumber={pickNumberHundler} />;

  if (userNumber) {
    screen = <GameScreen 
      userNumber={userNumber} 
      onGameOver={gameOverHandler}
      setGuessRounds={setGuessRounds} 
      guessRounds={guessRounds}
    />;
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen 
      userNumber={userNumber} 
      guessRounds={guessRounds} 
      onNewGame={newGameHandler} 
    />
  } 
  
  return (
     // styling here will apply throughout the whole app 
    //  hellow world  
    <>
    <StatusBar style='light' />
    <LinearGradient 
      style={styles.rootScreen}
      colors={[Colors.primary303, Colors.secondary101]}
    >
      <ImageBackground 
        source={require('./assets/images/bg.jpg')} 
        resizeMethod='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.5,
  }
});


