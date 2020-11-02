import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import colours from './colours';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> 
     Colours App
      </Text>
      <TouchableWithoutFeedback>
        <Image 
        styles={styles.container}
        source={
          require('./assets/Red.png')}
          style={{
            top: 400,
            right: -310,
          }}
        />
        </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Image 
        styles={styles.container}
        source={require('./assets/Blue.png')}
        style={{
          right: -160,
          top: 350
        }}
        /> 
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Image 
        styles={styles.container}
        source={require('./assets/Green.png')}
        style={{
          top: 300,
          right: -10
          
        }}
        />
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = () => {
  const [background, setBackground] = useState("#000");
  
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: {background},
      alignItems: 'baseline',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    text: {
      flex: 1,
      fontSize: 30,
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
  });
}

