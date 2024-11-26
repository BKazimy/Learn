import { useState } from 'react';
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions, 
    KeyboardAvoidingView,
    ScrollView,
 } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/title';
import Card from '../components/ui/Card';
import InstructionCard from '../components/ui/InstructionCard';

function StartGameScreen({ pickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('')

    const {width, height} = useWindowDimensions(); // alternative way to get device width and height.

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
        console.log(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confermInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Input has tot be a number between 1 to 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
        }
        else {
            console.log("Valid number!")
            pickedNumber(chosenNumber);
            console.log(chosenNumber);
        }
    }

    // confermInputHandler();
    const marginTopDistance = height < 380 ? 30 : 100; // creating style values so to create style object later

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
            <Title>Guess My Number!</Title>

            <Card>
                <InstructionCard>Enter a Number</InstructionCard>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false} // prevents form auto correnion useful for email input
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonGroupContiner}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressed={confermInputHandler}>Confirm</PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressed={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
        </KeyboardAvoidingView> 
        </ScrollView>
    );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    rootContainer: {
        flex:1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32, 
        borderBottomColor: Colors.secondary101,
        borderBottomWidth: 2,
        color: Colors.secondary101,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    buttonGroupContiner: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    },

});