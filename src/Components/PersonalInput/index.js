import React, { useState, forwardRef, useImperativeHandle, createRef } from 'react';

import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

// import { styles } from './styles';

export const PersonalInput = forwardRef((props, ref) => {

  const [securit, setSecurit] = useState(props.secureTextEntry)
  const [error, setError] = useState(false);
  const inputRef = createRef();



  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputRef.current.focus();
    },

    resetError() {
      setError(false);
    },

  }));


  return (
    <View style={styles.container}>

      <TextInput autoCorrect={false}
        style={[styles.input, { borderColor: error ? '#e91e63' : '#e4e7eb' }]}
        ref={inputRef}
        underlineColorAndroid='transparent'
        placeholderTextColor="#7B8794"
        {...props}
        secureTextEntry={securit}
      />

      <Icons name={props.inconName}
        size={26} color={error ? '#e91e63' : '#444'}
        style={styles.icon} />

      {props.secureTextEntry &&
        <TouchableOpacity onPress={() => setSecurit(!securit)} >

          <Icons name={securit ? "eye" : "eye-off"}
            size={26} color={error ? '#e91e63' : '#444'}
            style={styles.iconSecurit} />

        </TouchableOpacity>
      }

    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20
  },

  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1
  },

  icon: {
    position: 'absolute',
    left: 30,
    top: 12
  },

  iconSecurit: {
    position: 'absolute',
    right: 30,
    top: 12
  }
})