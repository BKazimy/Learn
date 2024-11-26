import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionCard from "../components/ui/InstructionCard";
import { Colors } from "react-native/Libraries/NewAppScreen";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    return (rndNum === exclude) ? generateRandomBetween(min, max, exclude) : rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

// component function
function GameScreen({userNumber, onGameOver, setGuessRounds, guessRounds}) {
    const initialGuess = generateRandomBetween(
        1, 
        100, 
        userNumber,
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const roundLength = guessRounds.length;
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        console.log("Something changed");
        if (currentGuess === userNumber) {
            console.log("Bingo!! game over.");
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
        setGuessRounds(() => [currentGuess]);
        console.log(currentGuess, "added after page loaded.")
}, []);

    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess <= userNumber) ||
            (direction === 'greater' && currentGuess >= userNumber)
        ) {
            Alert.alert("Dont lie!", "You knowthat is not right...", [
                { text: 'Sorry!', style: 'cancel'}
            ])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess-1;
        } else {
            minBoundary = currentGuess+1;
        }

        let nextGuess = generateRandomBetween(
            minBoundary, 
            maxBoundary, 
            currentGuess
        );
        setCurrentGuess(nextGuess);
        setGuessRounds(prev => [nextGuess, ...prev]);
        console.log(nextGuess, "added as initial guess.")
    }

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionCard style={styles.InstructionText}>Higher or lower?</InstructionCard>
                <View style={styles.biddingButtons}>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton pressed={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color={Colors.secondary101} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton pressed={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color={Colors.secondary101} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = 
        <>
            <View style={styles.buttonContainerWide}>
                <View style={styles.buttonContainer} >
                    <PrimaryButton pressed={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color={Colors.secondary101} />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer} >
                    <PrimaryButton pressed={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color={Colors.secondary101} />
                    </PrimaryButton>
                </View>
            </View>
        </>
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.ListContainer}>
                {/* {guessRounds.map(guess => <Text key={guess}>{guess}</Text>)} */}
                <FlatList // by defalue it is set to have infinite height so we have to limit it in its container.
                    data={guessRounds}
                    renderItem={(guessItem) => <GuessLogItem 
                        roundNumber={roundLength - guessItem.index}
                        guess={guessItem.item}
                    />}
                    keyExtractor={(item) => item}
                    // contentContainerStyle={styles.ListContainer}
                />
            </View>
        </View>
    );
} 

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingBottom: 0,
        alignItems: 'center',
    },

    biddingButtons: {
        flexDirection: 'row',
    },

    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonContainer: {
        flex: 1,
    },

    InstructionText: {
        marginBottom: 12,
        // color: "white",
    },

    ListContainer: {
        marginTop: 12,
        flex: 1,
        minWidth: '80%',
        maxWidth: '80%',
    },
})