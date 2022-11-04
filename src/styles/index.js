import {Warna_Hitam, Warna_Putih, Warna_Utama} from '../utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
    paddingHorizontal: 20,
  },
  textLogin: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Hitam,
    textAlign: 'center',
    marginTop: '20%',
    marginBottom: 30,
  },
  textFor: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Utama,
    textAlign: 'right',
    marginTop: 10,
  },
  conterMata: {
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conterBottom: {
    backgroundColor: Warna_Utama,
    height: 40,
    borderRadius: 7,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  textBottom: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Putih,
  },
  conterTextNew: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  textNew: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
  },
  textReg: {
    paddingLeft: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Warna_Utama,
  },
});
