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
  const [mata, setmata] = useState(true);
  const [name, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ktp, setKtp] = useState('');
  const [noHp, setNoHp] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState('');

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
    } else if (ktp === '') {
      Alert.alert('Ups !', 'anda belum mengisi KTP');
    } else if (ktp === '') {
      Alert.alert('Ups !', 'anda belum mengisi KTP');
    } else if (noHp === '') {
      Alert.alert('Ups !', 'anda belum mengisi No Telp');
    } else if (gender === '') {
      Alert.alert('Ups !', 'anda belum mengisi Gender');
    } else {
      setLoading(true);
      let myHeaders = new Headers();
      myHeaders.append(
        'Cookie',
        'XSRF-TOKEN=eyJpdiI6InRNS0dzZFNSSFpxUjkxVmFKdC9pMlE9PSIsInZhbHVlIjoiYzhCNmxqY09tN0VNVysxL3crbmVFQmN5RHNSREExUXlCRVNCVkZqSG1yaHVXZ2R3Z1ZrS0NHTkdacjlBT0UvbzhMeHNkejZhTTJ6RHF2NkFmVUs5NlFvUTRBY1h5WE83ZGJEOS96Z3pTb0VyNVNRclZHWXFQN3U4T1RYVEJFS24iLCJtYWMiOiI4ZTI1MzcyNjIyZGJmNzZmMTIzOWY4ZWFkYWNkZDg3MTFkMThkNmM2MjYxNGQ4Mjc3ZGZlNzRhODYyZmJjOThlIiwidGFnIjoiIn0%3D; larajet_session=eyJpdiI6IkxwSE1ZRnQvaXc0a0NHTEZkeWlyY0E9PSIsInZhbHVlIjoiWkpuTDkxQW15eFpQVVRtL3g0aTA5dFBGRzBDdTkvcCtvSkNGU0NVVkxrWFV0QVM5UExMLytmZUswM2trQWZaT21tY1k1UU00ckVIVDVEekplbGMxeHFINXVFVXhMWU10QzNqbnNDVXV4UnZKWEg0SDR3UUlXK3ZYM0U0MllWQnQiLCJtYWMiOiJhYTg5YzQzYzdkOTAwOGFlOWJkMjk0N2YzY2U4OGI4ZDM2NzAxZTQyZjBkYTBjNmY0ZWViZjJlOWRmMmY5YmQwIiwidGFnIjoiIn0%3D',
      );

      let formdata = new FormData();
      formdata.append('name', name);
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('ktp', ktp);
      formdata.append('phone_number', noHp);
      formdata.append('gender', gender);

      fetch('https://api-antrian.zenmultimediacorp.com/api/register', {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => console.log(result))
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
        secureTextEntry={mata}
        onPress={() => setmata(!mata)}
        onChangeText={t => setPassword(t)}
        conterMata={styles.conterMata}
      />
      <ConterInput
        title="KTP"
        plc="* * * * * * * * * *"
        onChangeText={t => setKtp(t)}
        keyboard="numeric"
      />
      <ConterInput
        title="No Telp"
        plc="* * * * * * * * * *"
        onChangeText={t => setNoHp(t)}
        keyboard="numeric"
      />
      <ConterInput
        title="Gender"
        plc="gender"
        onChangeText={t => setGender(t)}
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
