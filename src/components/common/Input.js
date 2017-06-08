import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle,containerStyle } = styles;
  return (
    <View style={containerStyle}>

      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        multiline={true}
        onChangeText={onChangeText}

      />
    </View>
  );
};

const styles = {
  inputStyle: {
    //color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 100,
    flex: 2,

  },
  // labelStyle: {
  //   fontSize: 18,
  //   paddingLeft: 20,
  //   flex: 1,
  //   backgroundColor: 'blue'
  // },
  containerStyle: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
     opacity: 0.5,

  }
};

export { Input };
