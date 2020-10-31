import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
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
            top: -20,
            width: 100
          }}
        />
        </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=> 
      styles.container.backgroundColor.colours = colours.blue}>
        <Image 
        styles={styles.container}
        source={require('./assets/Blue.png')}
          style={{
          top: -10,
        }}
        /> 
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Image 
        styles={styles.container}
        source={require('./assets/Green.png')}
        />
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.green,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    fontSize: 30,
  },
});
