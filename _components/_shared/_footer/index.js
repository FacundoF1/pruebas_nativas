import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faMap, faUserCog } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.content}> 
        <TouchableOpacity>
            {/* <Button onPress={this.login} title="asas" type="clear" /> */}
            <FontAwesomeIcon onPress={this.login} icon={ faUserCog } size={ 32 } /> 
        </TouchableOpacity>
      </View>   
      <View style={styles.content}> 
        <TouchableOpacity>
            {/* <Button onPress={this.login} title="asas" type="clear" /> */}
            <FontAwesomeIcon onPress={this.login} icon={ faMap } size={ 32 } /> 
        </TouchableOpacity>
      </View>   
      <View style={styles.content}> 
        <TouchableOpacity>
            {/* <Button onPress={this.login} title="asas" type="clear" /> */}
            <FontAwesomeIcon onPress={this.login} icon={ faCoffee } size={ 32 } /> 
        </TouchableOpacity>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "row",
    backgroundColor: 'black', 
  },
  content: {
    // alignSelf: 'flex-start',
    flex: 1,
    alignSelf: 'flex-start',   
    alignItems: 'center', 
    justifyContent: 'center',  
    backgroundColor: 'blue', 
  }
});