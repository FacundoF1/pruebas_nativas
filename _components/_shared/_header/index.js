import React from 'react';
import { StyleSheet, View, Button, Alert, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faSignInAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    login = () => {
        Alert.alert('Presión');
    };

    return (
        <View style={clas.header}>
            <View style={clas.left}>
              <TouchableOpacity>
                  {/* <Button onPress={this.login} title="asas" type="clear" /> */}
                  <FontAwesomeIcon onPress={this.login} icon={ faUserCog } size={ 32 } /> 
              </TouchableOpacity>
            </View> 
            <View style={clas.center}></View>
            <View style={clas.right}>
              <TouchableOpacity>  
                  {/* <Button title="" icon={ <FontAwesomeIcon icon={ faSignInAlt } size={ 32 } /> }/> */}
                  <FontAwesomeIcon onPress={this.login} icon={ faUserCog } size={ 32 } /> 
              </TouchableOpacity>
            </View>
        </View>
    );
}

const clas = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 28,
    backgroundColor: 'black', 
  },
  left: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',  
    backgroundColor: 'blue', 
  },
  right: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'yellow',
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  icon: {
  }
});
