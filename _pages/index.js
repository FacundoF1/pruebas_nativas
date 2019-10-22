import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Movie from "../_components/video";
import SlideParralax from '../_components/slide';

export default function Body() {
  return (
    <View style={styles.container}>
        <Text>Nueva app creada por Facundo Ferrari!</Text>
        <TextInput placeholder="Busqueda rápida" placeholderTextColor="grey" style={styles.input} />
        {/* <Movie {...{src:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} } /> */}
        <SlideParralax />
    </View>
  );
}
const t1 = {
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: 3,
}
const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  t1: {
    ...t1,
  },
  input: {
    ...t1,
    padding: 3,
    borderColor: '#000',
    borderWidth: 0.5,
  }
});

