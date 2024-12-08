import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { View } from 'react-native-web';
import CompButton from '../components/compButton';
import Submission from '../components/submission';
import Form from '../components/form';

function NewQuote({ navigation }) {
    return (
      <Form 
        navigation={navigation}/>
    );
};

export default NewQuote;