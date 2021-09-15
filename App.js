// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar,  Platform, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Welcome from './App/screens/welcome/Welcome';

export default function App() {

  console.log(StatusBar.currentHeight);

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <SafeAreaView style={styles.container}>
          <Welcome/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EDC84',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
  },

});
