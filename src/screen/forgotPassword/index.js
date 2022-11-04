import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ConterInput} from '../../components';
import {styles} from '../../styles';
import {Warna_Putih} from '../../utils';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const kirim = () => {
    if (email === '') {
      Alert.alert('ups!', 'Anda belum mengisi Email');
    } else if (
      email.split('@')[1] !== 'email.com' &&
      email.split('@')[1] !== 'gmail.com'
    ) {
      Alert.alert('Ups !', 'Email yang anda masukkan salah');
    } else {
      setLoading(true);

      fetch(
        'https://api-antrian.zenmultimediacorp.com/api/forgot-password?email=fulan@gmail.com',
        {
          method: 'POST',
          redirect: 'follow',
          headers: {
            Cookie:
              'XSRF-TOKEN=eyJpdiI6ImVNb2Z5QzcxSzVoMDNOSVBPUEhHQnc9PSIsInZhbHVlIjoieXpVcUdNY3lOcXdFd1ZmYUg3VHlmVFNvVEk5aCtJL205MkxnYTU2dW5IZ0lrNVl5UHhlZ3czbW53amRkVG9nK0lQSTFuVXBLeDgyMUlBY08vVHNBRUJUaW5FSGM2NUZxdnFpYWppL2wwa1AzS3B4Z3k3ZVRDelZTZ3JoREQ5c2EiLCJtYWMiOiIzNWE4ZjVmMzZiNWNiNTU3ZGVhNTNmOWM5NTM3YjZkZDc3Y2IzZDJjYTQwOWJiMmEyNzRlODE0Zjg3NGYwYjNhIiwidGFnIjoiIn0%3D; larajet_session=eyJpdiI6InhZeXJwNTIvUk5xOGU3dk4zMklOUXc9PSIsInZhbHVlIjoic1lnRnhBWmhkMXNzYng5bE1hbmFDZi9MODQrSkF2bDBlaU5WcHhtL0NXeGcvbzNHd3pSM3FvaHk2YlpCUUpqZWJtcU9RR3VzUHZqdTdaN1JhNDBMY0JzbTgxZFlKMjRIb1VSYVpvbzFvVUhha3BNZVVWU1k5SDZVRFZ0MDlaZmEiLCJtYWMiOiJjNzI2YWI4YTJjMDY2NWI3MTc3MzNkM2ViZWIzYzk1NjA0YTFlMmM2ODc4Zjk3MTI3NDA4M2RjMDJkYzUzYjI5IiwidGFnIjoiIn0%3D',
          },
        },
      )
        .then(response => response.json())
        .then(result => {
          console.log(result.message);
          Alert.alert('Message', `${result.message}`);
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Forgot Password?</Text>
      <ConterInput
        title="Email"
        plc="email@gmail.com"
        onChangeText={t => setEmail(t)}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ForgotPassword')
        }></TouchableOpacity>
      <TouchableOpacity style={styles.conterBottom} onPress={() => kirim()}>
        {loading ? (
          <ActivityIndicator size="small" color={Warna_Putih} />
        ) : (
          <Text style={styles.textBottom}>Submit</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
