import { createRef, useEffect, useState, } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import { PersonalInput } from './src/Components/PersonalInput';
import { PersonaMultiplelSelect } from './src/Components/PersonaMultiplelSelect';

import { posts } from './src/FakeApi'

export default function App() {

  const [data, setData] = useState({
    email: '',
    pass: ''
  });

  const emailRef = createRef();
  const passRef = createRef();
  const maskRef = createRef();

  useEffect(() => emailRef.current.resetError(), [data?.email]);
  useEffect(() => passRef.current.resetError(), [data?.pass]);

  const handleLogin = () => {

    if (data?.email === '') {
      alert('Email ou senha invalidol');
      emailRef.current.focusOnError();
      return;
    }
    if (data?.pass === '') {
      alert('Preencha a senha');
      passRef.current.focusOnError();
      return;
    }

  }

  return (
    <SafeAreaView style={styles.container}  >


      <PersonaMultiplelSelect
        change={(listSelected) => alert(listSelected.map(i => i?.id))}
        title='Posts' max={3}
        options={posts} />


      <PersonalInput
        ref={emailRef}
        inconName="account"
        placeholder="Email"
        autoCapitalize='none'
        keyboardType='email-address'
        value={data?.email}
        onChangeText={e => setData({ ...data, email: e })}

      />

      <PersonalInput
        ref={passRef}
        inconName="lock"
        placeholder="Senha"
        secureTextEntry
        autoCapitalize='none'
        keyboardType='default'
        value={data?.pass}
        onChangeText={e => setData({ ...data, pass: e })}
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text > Login</Text>
      </TouchableOpacity>

      <Text >{data?.email}</Text>
      <Text >{data?.pass}</Text>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
