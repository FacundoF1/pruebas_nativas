import React from 'react';
import { StyleSheet,  } from 'react-native';
import { Card } from 'react-native-elements';
import { Video } from 'expo-av';
  
const MovieResult = ({ src }) => {
  console.log(src); 
  return ( 
    <Card style={styles.container}>
        <Video
            source={{ uri: src }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            useNativeControls={true}
            isLooping
            style={styles.content}
        />
    </Card>
    
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 15,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 5,
    // flex: 0.7,
    // flexDirection: "row",
    // backgroundColor: 'black', 
  },
  content: {
    width: 300, 
    height: 300,
  }
});

export default MovieResult;