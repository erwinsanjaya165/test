import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Warna_Hitam} from '../../utils';

const ConterDataProfile = ({title, isi}) => {
  return (
    <View style={styles.conterText}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.isi}>{isi}</Text>
    </View>
  );
};

export default ConterDataProfile;

const styles = StyleSheet.create({
  conterText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Warna_Hitam,
  },
  isi: {
    position: 'absolute',
    left: '40%',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
  },
});
