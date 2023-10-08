import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { TextInput } from 'react-native-web';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function VoteScreen() {
    
    const [text, setText] = useState('');

    return (
    <View style = {styles.container}>
        <View style = {styles.productName}>
            <Image
                source = {require('/src/images/usb.png')}
                style = {styles.imgUsb}
            />

            <Text style = {styles.txtUsb}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>

        </View>

        <View style = {styles.voteProduct}>

            <View style = {{top: '40px'}}>
                <AirbnbRating
                    count={5}
                    reviews={["Tệ", "Không tốt", "Tốt", "Rất tốt", "Cực kỳ hài lòng"]}
                    defaultRating={5}
                    imageSize={50}
                    reviewColor = {{color: '#000000'}}
                    reviewSize = {'20px'}
                    starContainerStyle = {{marginTop: '15px'}}
                />

                <View style = {{width: '293px'}}>

                    <TouchableOpacity style={styles.btnAddImg}>
                        <Text style = {styles.txtAddImg}>Thêm hình ảnh</Text>
                    </TouchableOpacity>

                    <Image
                        source = {require('/src/images/camera.png')}
                        style = {styles.imgCamera}
                    />

                    <TextInput 
                        editable
                        multiline
                        onChangeText={text => onChangeText(text)}
                        style = {styles.txtiRate}
                        placeholder = 'Hãy chia sẻ những điều mà bạn thích về sản phẩm'   />

                    <TouchableOpacity style={styles.btnSend}>
                        <Text style = {styles.txtSend}>Gửi</Text>
                    </TouchableOpacity>

                </View>

                

            </View>
            

        </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },

    productName:{
        width: '100%',
        height: '15%',
    },

    voteProduct:{
        width: '100%',
        height: '85%',
    },

    txtUsb:{
        width: '260px',
        height: '21px',
        top: '-60px',
        left: '110px',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '19px',
        textAlign: 'left',
    
    },

    txtAddImg:{
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21px',
        textAlign: 'center',
        paddingTop: '20px',
        paddingLeft: '30px'
        
    },

    txtSend:{
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center',
        paddingTop: '8px',
        color: 'white',
    },

    btnAddImg:{
        width: '100%', 
        height: '68px',
        top: '35px',
        left: '50px',
        borderRadius: '5px',
        border: '1px',
        border: '1px solid #1511EB'
    },

    btnSend:{
        width: '100%', 
        height: '45px',
        top: '30px',
        left: '50px',
        borderRadius: '5px',
        border: '1px solid #1511EB',
        backgroundColor: '#0D5DB6'
        
    },

    txtiRate:{
        width: '100%', 
        height: '200px',
        border: '1px solid #C4C4C4',
        borderRadius: '5px',
        marginTop: '25px',
        marginLeft: '50px',
        fontSize: '20px',
        padding: '17px',
        paddingTop: '5px'
    },

    imgUsb:{
        width: '80px',
        height: '80px',
        top: '13px',
        left: '16px',

    },

    imgCamera:{
        width: '39px',
        height: '32px',
        top: '-17px',
        left: '95px',
    }
});

