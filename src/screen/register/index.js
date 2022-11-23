import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ConterInput} from '../../components';
import {styles} from '../../styles';
import {Warna_Putih} from '../../utils';

const Register = ({navigation}) => {
  const [mata1, setmata1] = useState(true);
  const [mata2, setmata2] = useState(true);
  const [name, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_Confirmation, setPassword_Confirmation] = useState('');
  const [loading, setLoading] = useState(false);

  const reg = () => {
    if (name === '') {
      Alert.alert('Ups !', 'Anda belum mengisi Name');
    } else if (email === '') {
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
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_Confirmation,
      });

      fetch('https://api-todoapp-pp.herokuapp.com/api/auth/register', {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => console.log('akun terdaftar', result))
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textLogin}>Register</Text>
      <ConterInput title="Name" plc="name" onChangeText={t => setNama(t)} />
      <ConterInput
        title="Email"
        plc="email@gmail.com"
        onChangeText={t => setEmail(t)}
      />
      <ConterInput
        title="Password"
        plc="* * * * * * * *"
        icon="eye"
        secureTextEntry={mata1}
        onPress={() => setmata1(!mata1)}
        onChangeText={t => setPassword(t)}
        conterMata={styles.conterMata}
      />
      <ConterInput
        title="Password Confirmation"
        plc="* * * * * * * *"
        icon="eye"
        secureTextEntry={mata2}
        onPress={() => setmata2(!mata2)}
        onChangeText={t => setPassword_Confirmation(t)}
        conterMata={styles.conterMata}
      />

      <TouchableOpacity style={styles.conterBottom} onPress={() => reg()}>
        {loading ? (
          <ActivityIndicator size="small" color={Warna_Putih} />
        ) : (
          <Text style={styles.textBottom}>Register</Text>
        )}
      </TouchableOpacity>
      <View style={styles.conterTextNew}>
        <Text style={styles.textNew}>Already Member?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textReg}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
