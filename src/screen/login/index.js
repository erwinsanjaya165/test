import {
  ActivityIndicator,
  Alert,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ConterInput} from '../../components';
import {styles} from '../../styles';
import {Warna_Putih} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [mata, setmata] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const log = () => {
    if (email === '') {
      Alert.alert('Ups !', 'Anda belum mengisi Email');
    } else if (
      email.split('@')[1] !== 'email.com' &&
      email.split('@')[1] !== 'gmail.com'
    ) {
      Alert.alert('Ups !', 'Email yang anda masukkan salah');
    } else if (password === '') {
      Alert.alert('Ups !', 'Anda belum mengisi Password');
    } else if (password.length < 8) {
      Alert.alert('Ups !', 'Password minimal 8 karakter');
    } else {
      setLoading(true);
      let formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);

      fetch('https://api-antrian.zenmultimediacorp.com/api/login', {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        headers: {
          Cookie:
            'XSRF-TOKEN=eyJpdiI6ImJ0MjR3T1IzQ3pUSVQwa2RxS1NKNEE9PSIsInZhbHVlIjoiMXYzM2hSVzVYY2NjKyszcVpRMU5mczdDRFdBd096N2dackVzSVV0SzN6UUs4NndFcjBiUlRtbHBZZVlKbjMwZDJoUW5nUUhsZEptcmU1aUU2VzJ3NG1CdVJ2VkxaYUdVaDhsZDNBcWllZVJDdTI5QW41RVhvQUhFRHJQbnhIWHEiLCJtYWMiOiJjYzM4NjZjNWU4ODZkNmQ5YmM2Nzg3MDRhMGJiNzEzYWExZTI5MjdlODcxZmY5ZWRkYzJiNWQ1YjAwZmVkNGJmIiwidGFnIjoiIn0%3D; larajet_session=eyJpdiI6ImpUNklTUEJ5eGJmV3A0UUprdDlrNkE9PSIsInZhbHVlIjoiZTFKaXBhbmlwczRWQjJDZmppS0ozeEJLZmYzQ3hTb3hjZzUrQ3JvOGpmUDNuZkxJdzU2UVRNSzVHOTlCQ3F6WG1vNFhkUkxISUhKaDczeEd5RmxyTmgrWEhNbUV6WjFsQWdqVCtCdnlwUFdwY1psNFZ0bUxtVk9xUlhyYUNHdTAiLCJtYWMiOiIzZTMzMDIzZDFkODIxYjZjMzM1MzcwNGE4ODYzMWJlMmQ2ZjQwZWYyZjRiOWU1MTkzNGNkODA1NmIyZmM4YTM1IiwidGFnIjoiIn0%3D',
        },
      })
        .then(response => response.json())
        .then(result => {
          if (result.token_type === 'Bearer') {
            console.log(result.access_token);
            AsyncStorage.setItem('token', result.access_token);
            ToastAndroid.show('Login succes!', ToastAndroid.SHORT);
            navigation.replace('profile');
          } else {
            console.log('gagal');
            Alert.alert('ups!', 'akun yang anda masukkan belum terdaftar');
          }
        })
        .catch(error => {
          console.log('error', error);
          Alert.alert('ups!', 'akun yang anda masukkan belum terdaftar');
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <ConterInput
        title="Email"
        plc="email@gmail.com"
        onChangeText={t => setEmail(t)}
      />
      <ConterInput
        title="Password"
        plc="password"
        icon="eye"
        secureTextEntry={mata}
        onPress={() => setmata(!mata)}
        onChangeText={t => setPassword(t)}
        conterMata={styles.conterMata}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.textFor}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conterBottom} onPress={() => log()}>
        {loading ? (
          <ActivityIndicator size="small" color={Warna_Putih} />
        ) : (
          <Text style={styles.textBottom}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.conterTextNew}>
        <Text style={styles.textNew}>New here?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textReg}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
