import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Warna_Hitam} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ConterInput = ({
  title,
  plc,
  icon,
  onPress,
  secureTextEntry,
  onChangeText,
  conterMata,
  keyboard,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.conterInput}>
        <TextInput
          placeholder={plc}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          keyboardType={keyboard}
        />
        <TouchableOpacity style={conterMata} onPress={onPress}>
          <Icon name={icon} size={20} color={Warna_Hitam} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConterInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Hitam,
  },
  conterInput: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    color: Warna_Hitam,
    borderRadius: 7,
    width: '100%',
  },
});
