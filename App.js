import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./_components/_shared/_header";
import Footer from "./_components/_shared/_footer";
import Body from "./_pages";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e1e1e1',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
