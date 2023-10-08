import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { TextInput } from 'react-native-web';


export default function LoginScreen() {

  const dataLogin = [
    {
      username: 'DuyKhanh',
      password: 'duykhanh',
    }
  ]

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    let find = false;

    dataLogin.forEach(data => {
      if (data.username === username && data.password === password)
        find = true;
    });

    if (find)
      alert('Đăng nhập thành công')
    else
      alert('Đăng nhập thất bại. Vui lòng thử lại')

  }

  const [text, setText] = useState('');
  return (
    <View style={styles.container}>

      <Text style={styles.textLogin}>LOGIN</Text>

      <View style={styles.boxName}>
        <View>
          <Image
            source={require('/src/images/avatar.png')}
            style={styles.imgAvatar}
          />
        </View>

        <View >
          <TextInput
            editable
            multiline
            style={styles.txtName}
            placeholder='Name'
            onChangeText={setUsername}
            defaultValue={text}
          />
        </View>


      </View>

      <View style={styles.boxPassword}>

        <View>
          <TextInput
            editable
            onChangeText={setPassword}
            style={styles.txtPassword}
            placeholder='Password'
            secureTextEntry={true} />
        </View>

        <View>
          <Image
            source={require('/src/images/lock.png')}
            style={styles.imgLock}
          />
        </View>



        <View>
          <Image
            source={require('/src/images/eye.png')}
            style={styles.imgEye}
          />
        </View>



      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
        <Text style={[styles.txtLogin, styles.setColorWhile]}>LOGIN</Text>
      </TouchableOpacity>


      <Text style={styles.create}>Forgot your password?</Text>



    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)'

  },

  create: {
    width: '350px',
    height: '45px',
    top: '260px',
    left: '25px',
    fontSize: '22px',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  textLogin: {
    width: '120px',
    height: '29px',
    top: '82px',
    left: '30px',
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '35.16px',
    textAlign: 'center'
  },

  btnLogin: {
    width: '330px',
    height: '45px',
    top: '220px',
    left: '35px',
    backgroundColor: '#060000'
  },


  txtLogin: {
    width: '90px',
    height: '23px',
    top: '10px',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '23px',
    textAlign: 'center',
    alignSelf: 'center'
  },

  setColorWhile: {
    color: '#FFFFFF'
  },

  setColorBlue: {
    color: 'blue'
  },


  boxName: {
    width: '330px',
    height: '54px',
    top: '150px',
    left: '35px',
    borderWidth: 1,
    borderColor: '#F2F2F2',

  },

  boxPassword: {
    width: '330px',
    height: '54px',
    top: '170px',
    left: '35px',
    borderWidth: 1,
    borderColor: '#F2F2F2',
  },

  txtName: {
    width: '330px',
    height: '54px',
    fontSize: '25px',
    textAlign: 'left',
    marginTop: '-45px',
    paddingTop: '8px',
    paddingLeft: '60px'
  },

  txtPassword: {
    width: '330px',
    height: '54px',
    fontSize: '25px',
    textAlign: 'left',
    paddingTop: '-5px',
    paddingLeft: '60px'
  },


  imgEye: {
    width: '38px',
    height: '36px',
    alignSelf: 'flex-end',
    marginTop: '-80px',
    marginRight: '15px'
  },

  imgAvatar: {
    width: '40px',
    height: '40px',
    marginTop: '7px',
    marginLeft: '10px'

  },

  imgLock: {
    width: '30px',
    height: '36px',
    alignSelf: 'flex-start',
    marginLeft: '10px',
    top: '-45px'
  },




});

