import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';


class SoundButton extends React.Component {
   playSound = async () => {
     Audio.Sound.createAsync(
       {uri : 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay : true}
     )
  }

  render() {
    return (
      <TouchableOpacity style = 
      {{
        marginLeft :50,
        borderWidth : 10,
        borderColor : "red",
        backgroundColor : "red",
        height : 70,
        width : 100,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 100
      }}
       onPress = {this.playSound}>
      <Text style = 
      {{
        fontWeight : 'bold',
        fontSize : 20

      }}>
      click me
      </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


