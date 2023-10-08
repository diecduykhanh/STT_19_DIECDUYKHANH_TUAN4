import React, {useState} from 'react';
import { CheckBox, StyleSheet, Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { TextInput } from 'react-native-web';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function PasswordGenerateScreen() {

    const [chkLowerCaseLetters, setLowerCaseLetters] = useState(false);
    const [chkUpcaseLetters, setUpcaseLetters] = useState(false);
    const [chkNumber, setNumber] = useState(false);
    const [chkSpecialSymbol, setSpecialSymbol] = useState(false);

    const [text, setText] = useState('');
    const [passLength, setpassLength] = useState('');
    return (
    <View style = {styles.container}>
        <View style = {styles.body}> 
            <Text style = {styles.txtPass}>PASSWORD GENERATOR</Text>
            <View style = {{width:'305px'}}>
              <TextInput 
                  editable
                  multiline
                  onChangeText={text => onChangeText(text)}
                  style = {styles.txtiPassword}
              />

              <View>
                <Text style = {styles.txtPassLength}>Password length</Text>
                
                <TextInput 
                  editable
                  multiline
                  onChangeText={text => onChangeText(text)}
                  style = {styles.txtiPassLength}
              />
              </View>

              <View>
                <Text style = {styles.txtPassLength}>Include lower case letters</Text>
                
                  <CheckBox
                    value={chkLowerCaseLetters}
                    onValueChange={setLowerCaseLetters}
                    style={styles.checkbox}
                  />

              </View>

              <View>
                <Text style = {styles.txtPassLength}>Include upcase letters</Text>
                
                  <CheckBox
                    value={chkUpcaseLetters}
                    onValueChange={setUpcaseLetters}
                    style={styles.checkbox}
                  />

              </View>

              <View>
                <Text style = {styles.txtPassLength}>Include number</Text>
                
                  <CheckBox
                    value={chkNumber}
                    onValueChange={setNumber}
                    style={styles.checkbox}
                  />

              </View>

              <View>
                <Text style = {styles.txtPassLength}>Include special symbol</Text>
                
                  <CheckBox
                    value={chkSpecialSymbol}
                    onValueChange={setSpecialSymbol}
                    style={styles.checkbox}
                  />

              </View>

              <TouchableOpacity style={styles.btnGP}>
                    <Text style = {styles.txtGP}>GENERATE PASSWORD</Text>
              </TouchableOpacity>


            </View>

        </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)'
    },

     body:{
      flex: 1,
      backgroundColor: '#23235B',
      margin: '20px',
      borderRadius: '15px',
     },

     txtPass:{
      width: '181px',
      height: '64px',
      top: '40px',
      left: '85px',
      fontSize: '25px',
      fontWeight: '700',
      lineHeight: '29.3px',
      textAlign: 'center',
      color: 'white'
     },

     txtPassLength:{
      width: '250px',
      height: '24px',
      top: '50px',
      left: '23px',
      color: 'white',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '23.44px',
      marginTop: '-20px'    
    },

    txtGP:{
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '23.44px',
      textAlign: 'center',
      paddingTop: '12px',
      color: 'white',
  },

    btnGP:{
      width: '100%', 
      height: '50px',
      top: '30px',
      left: '23px',
      borderRadius: '5px',
      backgroundColor: '#3B3B98'
  },

     txtiPassword:{
      width: '100%',
      height: '55px',
      marginTop: '70px',
      marginBottom: '25px',
      marginLeft: '23px',
      backgroundColor: '#151537',
      fontSize: '30px',
      color: 'white',
      paddingTop: '5px',
      paddingLeft: '15px'
     },

     txtiPassLength:{
      width: '135px',
      height: '40px',
      marginLeft: '193px',
      marginTop: '20px',
      backgroundColor: 'white',
      fontSize: '20px',
      paddingTop: '5px',
      paddingLeft: '15px',
     },

     checkbox: {
      width: '35px',
      height: '35px',
      marginLeft: '293px',
      marginTop: '22px',
    },


});

