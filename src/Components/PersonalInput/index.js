import React, { useState, forwardRef, useImperativeHandle, createRef } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { utils } from '../../Utils';


/**
   * Esse componente usa as seguintes propriedades:
   * 
   * @param {label} - [opcional] - Usado para inserir um label a cima do campo do inpu.
   * @param {secureTextEntry} - [opcional] - Usado para mostrar ou esconder o conteudo do input, recomendado para uso de inputs de senha.
   * @param {inconName} - [opcional] - Usado para inserir icones (necessario a instalação da lib react-native-vector-icons). Utiliza icones do MaterialCommunityIcons
   * @param {mask} - [opcional] - Usado para inserir mascaras de formatação nos input (Carregar o arquivo de Utils no projeto para a utilização dessa prop).
   * @param {inputMaskChange} - [opcional] - Esse parametro torna-se obrigatorio ao utilizar mascaras, o mesmo passa uma função para o onChangeText do componente.
   */



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

  const useMask = (txt) => {

    let value;

    if (props.mask === 'cep') {
      value = utils.maskCEP(txt);
    }

    if (props.mask === 'documents') {
      value = utils.maskDocuments(txt);
    }

    if (props.mask === 'birthdate') {
      value = utils.maskBirthDate(txt);

    }
    if (props.mask === 'phone') {
      value = utils.maskPhone(txt);
    }

    props.inputMaskChange(value);
  }

  return (

    <View style={styles.container}>

      {props?.label &&
        <Text style={styles.label}>{props?.label}</Text>
      }

      <View style={[styles.inputWrapper, { borderColor: error ? '#e91e63' : '#e4e7eb' }]}>

        <Icons name={props.inconName}
          size={26} color={error ? '#e91e63' : '#444'}
          style={styles.icon} />

        <TextInput autoCorrect={false}
          style={styles.input}
          ref={inputRef}
          underlineColorAndroid='transparent'
          placeholderTextColor={error ? '#e91e63' : "#7B8794"}
          onChangeText={(text) => useMask(text)}
          {...props}
          secureTextEntry={securit}
        />


        {props.secureTextEntry &&
          <TouchableOpacity onPress={() => setSecurit(!securit)} >

            <Icons name={securit ? "eye" : "eye-off"}
              size={26} color={error ? '#e91e63' : '#444'}
              style={styles.iconSecurit} />

          </TouchableOpacity>
        }

      </View>

    </View>
  );
})

const styles = StyleSheet.create({

  container: { marginTop: 20 },
  label: { marginBottom: 5 },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10

  },

  input: {
    fontSize: 18,
    flex: 1,
    color: '#444'

  },

  icon: {
    marginRight: 10
  },

})


// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginTop: 20
//   },

//   input: {
//     height: 50,
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingLeft: 40,
//     marginHorizontal: 20,
//     borderRadius: 8,
//     fontSize: 18,
//     borderWidth: 1
//   },

//   icon: {
//     position: 'absolute',
//     left: 30,
//     top: 12
//   },

//   iconSecurit: {
//     position: 'absolute',
//     right: 30,
//     top: 12
//   }
// })