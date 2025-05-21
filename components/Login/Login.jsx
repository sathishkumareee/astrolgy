import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Login() {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginTop:'5%'}}></View>
      {/* Yellow corner shape */}
      <Image
    source={require('../../assets/images/curve.png')}
    style={styles.topRightImage}
  />
      {/* Illustration */}
      <Image
        source={require('../../assets/images/pana.png')} // Replace with your illustration image
        style={styles.image}
        resizeMode="contain"
      />
     

      <View style={styles.card}>
        <Text style={styles.title}>Hi Welcome!</Text>
        <Text style={styles.subtitle}>Submit your Mobile number</Text>
        {/* <Text style={styles.divider}>Log in or Sign up</Text> */}
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignSelf:'center'}}>
          <View style={[styles.divider,{width:'30%',marginTop:'1%'}]}></View>
          <Text style={{textAlign:'center',color:'#fff'}}>Log in or Sign up</Text>
          <View style={[styles.divider,{width: '35%',marginTop:'1%'}]}></View>
        </View>

        {/* Phone Input */}
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="US"
          layout="first"
          onChangeFormattedText={text => setPhoneNumber(text)}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
        />

        {/* Send OTP Button */}
        <TouchableOpacity style={styles.sendOtpButton}>
          <Text style={styles.sendOtpText}>SEND OTP</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <Text style={[styles.orDivider,{textAlign:'center'}]}>Or</Text>

        {/* Continue with Email */}
        <TouchableOpacity style={styles.emailButton}>
          <Icon name="email" size={20} color="#fff" />
          <Text style={styles.emailText}>Continue with Email Id</Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <Text style={styles.footerText}>
          By signing up, you agree to our <Text style={styles.link}>Terms of Use</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    marginTop: 20,
    zIndex: 1, // higher to appear above the curve
    alignSelf: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#e53935',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    // alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  divider: {
    color: '#fff',
    marginBottom: 15,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    width: '100%',
    textAlign: 'center',
    paddingBottom: 5,
  },
  phoneContainer: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 0,
  },
  sendOtpButton: {
    marginTop: 15,
    backgroundColor: '#ffca28',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
  },
  sendOtpText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  orDivider: {
    marginVertical: 15,
    color: '#fff',
    fontWeight: '600',
  },
  emailButton: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailText: {
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#ffc107',
  },
  topRightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 160, // adjust based on image size
    height: 160,
    resizeMode: 'contain',
    zIndex: 1,
  },
  
  
});

export default Login;