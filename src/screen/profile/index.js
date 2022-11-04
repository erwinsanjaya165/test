import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Warna_Hitam, Warna_Putih, Warna_Utama} from '../../utils';
import ConterDataProfile from '../../components/conterDataProfile';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');
  const [ktp, setKtp] = useState('');
  const [gender, setGender] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('token').then(value => {
      console.log('token', value);
      fetch('https://api-antrian.zenmultimediacorp.com/api/profile', {
        method: 'GET',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
          Cookie:
            'XSRF-TOKEN=eyJpdiI6ImppdVhiMTJwTTZiNHlHVnFFWlVoR2c9PSIsInZhbHVlIjoiWW9DeFJ2YUhiV09kRUs2RVB2ODBvaXh0M1o4Z2xCbUNQN1I5c3R0SVA1UVM0RG0wNXZwZkdwVWQ1UUV5U2lpc0FZUHhPZU5xaXUzRXAyWWRLRHZOV24xV05HdVUwdGhUQ01sY2p2RytpYnNqb2dFdmlsdWJnSGZRN0Zrc3p3ZjEiLCJtYWMiOiI5MDU3MDc5Yzc2ODA1ZTUwOTU1OWU5OTQ4ODFjM2VhMzBlOTdlZjMzOWVhZmFkYzg3ZWE3MWE5YTRmMzhkYjFjIiwidGFnIjoiIn0%3D; larajet_session=eyJpdiI6IklRdG0zM3k5SjA5Vkk2TWlnaGpVU1E9PSIsInZhbHVlIjoiR1RZaTVsYnI1MWNkMmhJeUIrcXlENWdGMGxYczY5VVV5VmtTYVNWaXRETGhEcnlCQUpxU1VOWmRhcVhMVzVRNktHSnhENlZGUVhCTnlVVkxNV1R5VnBzeTJkbC9ycngyNFVrQVpJNDhreHFyb1pXaC9JeDZNSXZFK1dvZisyaWwiLCJtYWMiOiIxNTEyNDhkYWNiYjQyMWQwNjgwOTNmOGVlMmNlOTMyMDlmYTJlMjQyZDIzZjUzYjY2NDliOTk3ZGFiMTdlMWJkIiwidGFnIjoiIn0%3D',
        },
      })
        .then(response => response.json())
        .then(result => {
          console.log(result.data);
          setName(result.data.name);
          setEmail(result.data.email);
          setNoHp(result.data.phone_number);
          setKtp(result.data.ktp);
          setGender(result.data.gender);
        })
        .catch(error => console.log('error', error));
    });
  }, []);

  const edit = () => {
    Alert.alert('Perhatian!', 'untuk saat ini data anda belum bisa kami edit');
  };

  return (
    <View style={styles.container}>
      <View style={styles.conterDataText}>
        <ConterDataProfile title="Nama" isi={name} />
        <ConterDataProfile title="Email" isi={email} />
        <ConterDataProfile title="Phone Number" isi={noHp} />
        <ConterDataProfile title="KTP" isi={ktp} />
        <ConterDataProfile title="Gender" isi={gender} />
      </View>
      <TouchableOpacity style={styles.conterBottom} onPress={() => edit()}>
        <Text style={styles.textEdit}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
    paddingHorizontal: 20,
  },
  conterDataText: {
    marginTop: 15,
  },
  conterBottom: {
    backgroundColor: Warna_Utama,
    elevation: 1,
    marginTop: 20,
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEdit: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Putih,
  },
});
