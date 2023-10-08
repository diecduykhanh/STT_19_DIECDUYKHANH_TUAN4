import React, {useState} from 'react';
import { CheckBox, StyleSheet, Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { TextInput } from 'react-native-web';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function PayScreen() {
    return (
    <View style = {styles.container}>
       <View style = {styles.head}>
          <Image
              source = {require('/src/images/book.png')}
              style = {styles.imgBook}
          />

          <View style = {{width: '230px', left: '142px', alignItems:'flex-start'}}>
              <Text style = {styles.txtProductName}>Nguyên hàm tích phân và ứng dụng</Text>

              <Text style = {styles.txtNXB}>Cung cấp bởi Tiki Trading</Text>

              <Text style = {styles.txtPriceNew}>141.800 đ</Text>

              <Text style = {styles.txtPriceOld}>141.800 đ</Text>

              <TouchableOpacity style={styles.btnMinus}>
                  <Text style = {[styles.txtMinus]}>-</Text>
              </TouchableOpacity>

              <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    style = {styles.txtiQuality}
                    placeholder = '1'                 />

              <TouchableOpacity style={styles.btnAdd}>
                  <Text style = {[styles.txtAdd]}>+</Text>
              </TouchableOpacity>

              <Text style = {styles.txtBuyLater}>Mua sau</Text>

          </View>

          <Text style = {styles.txtSavedDiscount}>Mã giảm giá đã lưu</Text>

          <Text style = {styles.txtSeeHere}>Xem tại đây</Text>

          <TouchableOpacity style={styles.btnMaGiamGia}>
              <Text style = {[styles.txtMaGiamGia]}>Mã giảm giá</Text>

              <TouchableOpacity style={{backgroundColor:'yellow', width:'32px', height: '16px', left: '17px', top: '-8px'}}/>

          </TouchableOpacity>

          <TouchableOpacity style={styles.btnApDung}>
              <Text style = {[styles.txtApDung]}>Áp dụng</Text>
          </TouchableOpacity>
       </View>


       <View style = {styles.mid}>
          <Text style = {styles.txtPhieuQua}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>

          <Text style = {styles.txtNhapTaiDay}>Nhập tại đây?</Text>
       </View>

       <View style = {styles.mid2}>
          <Text style = {styles.txtTamTinh}>Tạm tính</Text>
          <Text style = {styles.txtGiaTamTinh}>141.800 đ</Text>
       </View>

       <View style = {styles.end}>
          <View style = {{flexDirection:'row', width: '100%', height:'50%', alignItems:'center'}}>
            <Text style = {styles.txtThanhTien}>Thành tiền</Text>
            <Text style = {styles.txtTotal}>141.800 đ</Text>
          </View>

          <View style = {{width: '100%', height:'50%'}}>
          <TouchableOpacity style={styles.btnDatHang}>
              <Text style = {[styles.txtDatHang]}>Tiến hành đặt hàng</Text>
          </TouchableOpacity>

          </View>

          

       </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#C4C4C4'
    },

    head:{
      width: '100%',
      height: '283px',
      left: '1px',
      backgroundColor: 'white'
    },

    mid:{
      width: '100%',
      height: '51px',
      left: '1px',
      top:'20px',
      backgroundColor: 'white',
    },

    mid2:{
      width: '100%',
      height: '51px',
      left: '1px',
      top:'40px',
      backgroundColor: 'white',
      alignItems:'center',
      flexDirection:'row'
    },

    end:{
      width: '100%',
      height: '120px',
      left: '1px',
      top:'158px',
      backgroundColor: 'white',
      flexDirection:'column'
    },

    txtProductName:{
      height: '14px', 
      top: '-105px', 
      fontSize: '12px', 
      lineHeight: '14.06px', 
      textAlign:'center', 
      fontWeight: '700'
    },

    txtNXB:{
      height: '14px', 
      top: '-95px', 
      fontSize: '12px', 
      lineHeight: '14.06px', 
      textAlign:'center', 
      fontWeight: '700',
    },

    txtPriceNew:{
      height: '21px', 
      top: '-85px', 
      fontSize: '18px', 
      lineHeight: '21.09px', 
      textAlign:'center', 
      fontWeight: '700',
      color: 'red'
    },

    txtPriceOld:{
      height: '21px', 
      top: '-75px', 
      fontSize: '12px', 
      lineHeight: '21.09px', 
      textAlign:'center', 
      fontWeight: '700',
      color: '#808080',
      rotation: '90 deg',
      textDecorationLine: 'line-through'
    },

    txtMinus:{
      height: '8px',
      color: '#808080',
      fontSize: '20px',
      fontWeight:'700',
      top: '-8px',
      alignSelf: 'center'
    },

    txtAdd:{
      height: '8px',
      color: 'black',
      fontSize: '20px',
      fontWeight:'700',
      top: '-8px',
      alignSelf: 'center'
    },

    txtBuyLater:{
      height: '14px',
      color: '#134FEC',
      fontSize: '12px',
      fontWeight:'700',
      lineHeight: '14.06px',
      top: '-30px',
      left: '160px'
    },

    txtiQuality:{
      width: '20px',
      height: '18px',
      marginTop: '-90px',
      marginLeft: '20px',
      paddingLeft: '6px'
    },

    txtSavedDiscount:{
      top: '-10px', 
      left: '13px', 
      width: '120px', 
      height: '14px', 
      fontSize: '12px', 
      fontWeight: '700', 
      lineHeight: '14.06px', 
      textAlign: 'center'
    },

    txtSeeHere:{
      top: '-23px', 
      left: '125px', 
      width: '120px', 
      height: '14px', 
      fontSize: '12px', 
      fontWeight: '700', 
      lineHeight: '14.06px', 
      textAlign: 'center',
      color:'#134FEC'
    },

    txtMaGiamGia:{
      width: '120px', 
      height: '21px', 
      fontSize: '18px', 
      fontWeight: '700', 
      lineHeight: '21.09px', 
      textAlign: 'center',
      alignSelf:'center',
      paddingTop:'10px',
      paddingLeft: '10px'
    },

    txtApDung:{
      width: '90px', 
      height: '23px', 
      fontSize: '19px', 
      fontWeight: '700', 
      lineHeight: '23.44px', 
      textAlign: 'center',
      alignSelf:'center',
      paddingTop:'9px',
      color: 'white'
    },

    txtPhieuQua:{
      fontSize: '12px', 
      fontWeight: '700', 
      lineHeight: '14.06px',
      paddingTop: '18px',
      left: '20px'
    
    },

    txtNhapTaiDay:{
      fontSize: '12px', 
      fontWeight: '700', 
      lineHeight: '14.06px',
      top: '-14px',
      left: '260px',
      color:'#134FEC'
    },

    txtTamTinh:{
      fontSize: '18px', 
      fontWeight: '700', 
      lineHeight: '21.09px',
      left: '20px',
    },

    txtGiaTamTinh:{
      fontSize: '18px', 
      fontWeight: '700', 
      lineHeight: '21.09px',
      left: '180px',
      color:'red'
    },

    txtThanhTien:{
      fontSize: '18px', 
      fontWeight: '700', 
      lineHeight: '21.09px',
      left: '20px',
      color:'#808080'
    },

    txtTotal:{
      fontSize: '18px', 
      fontWeight: '700', 
      lineHeight: '21.09px',
      left: '160px',
      color:'red'
    },

    txtDatHang:{
      fontSize: '20px', 
      fontWeight: '700', 
      lineHeight: '23.44px',
      color:'white',
      alignSelf:'center',
      paddingTop:'10px'
    },

    btnMinus:{
      width: '14.22px',
      height: '16px',
      top: '-73px',
      backgroundColor: '#C4C4C4'
    },

    btnAdd:{
      width: '14.22px',
      height: '16px',
      top: '-17px',
      left: '45px',
      backgroundColor: '#C4C4C4'
    },

    btnMaGiamGia:{
      width: '208px',
      height: '45px',
      left: '20px',
      borderRadius: '2px',
      border: '1px solid #808080 ',    
    },

    btnApDung:{
      width: '99px',
      height: '45px',
      borderRadius: '2px',
      backgroundColor: '#0A5EB7',
      left: '260px',
      top:'-45px'
    },

    btnDatHang:{
      width: '331px',
      height: '45px',
      borderRadius: '2px',
      backgroundColor: '#E53935',
      left: '20px',
    },


    imgBook:{
      width: '104px',
      height: '127px',
      top: '14px',
      left: '13px'
      
    },

});

