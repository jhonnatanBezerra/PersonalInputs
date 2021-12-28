import { createRef, useEffect, useState, } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import { PersonalInput } from './src/Components/PersonalInput';
import { PersonaMultiplelSelect } from './src/Components/PersonaMultiplelSelect';

import { posts } from './src/FakeApi'

export default function App() {

  const [data, setData] = useState({
    email: '',
    pass: '',
    cep: '79950-000',
    cpf: '15.543.408/0001-87',
    birthdate: '03/04/1995',
    phone: '(67) 99680-9432',
  });

  // const emailRef = createRef();
  // const passRef = createRef();
  const phoneRef = createRef();
  const birthdateRef = createRef();
  const cpfRef = createRef();
  const cepRef = createRef();

  // useEffect(() => emailRef.current.resetError(), [data?.email]);
  // useEffect(() => passRef.current.resetError(), [data?.pass]);
  useEffect(() => phoneRef.current.resetError(), [data?.phone]);

  const handleLogin = () => {

    if (data?.phone === '') {
      phoneRef.current.focusOnError();
    }

    if (data?.cep === '') {
      cepRef.current.focusOnError();
    }

    if (data?.email === '') {
      // emailRef.current.focusOnError();
    }

    if (data?.pass === '') {
      // passRef.current.focusOnError();
    }

    alert('Preencha os campos restantes');

  }

  const handleCEP = (cep) => {
    setData({ ...data, cep: cep })
  }

  const handleCPF = (document) => {
    setData({ ...data, cpf: document })
  }

  const handleBirthdate = (date) => {
    setData({ ...data, birthdate: date })
  }

  const handlePhone = (phone) => {
    setData({ ...data, phone: phone })
  }



  return (
    <SafeAreaView style={styles.container}  >

      {/* 
      <PersonaMultiplelSelect
        change={(listSelected) => alert(listSelected.map(i => i?.id))}
        title='Posts' max={3}
        options={posts} /> */}


      <PersonalInput
        ref={phoneRef}
        inconName="phone"
        placeholder="Telefone"
        autoCapitalize='none'
        keyboardType='number-pad'
        returnKeyType='done'
        value={data?.phone}
        mask="phone"
        inputMaskChange={txt => handlePhone(txt)}
        maxLength={15}
      />

      <PersonalInput
        ref={birthdateRef}
        inconName="cake-variant"
        placeholder="DD/MM/YYYY"
        autoCapitalize='none'
        keyboardType='number-pad'
        returnKeyType='done'
        value={data?.birthdate}
        mask="birthdate"
        inputMaskChange={txt => handleBirthdate(txt)}
        maxLength={10}
      />

      <PersonalInput
        ref={cpfRef}
        inconName="balloon"
        placeholder="CPF / CNPJ"
        autoCapitalize='none'
        keyboardType='number-pad'
        returnKeyType='done'
        value={data?.cpf}
        mask="documents"
        inputMaskChange={txt => handleCPF(txt)}
        maxLength={18}
      />

      <PersonalInput
        ref={cepRef}
        inconName="balloon"
        placeholder="C.E.P"
        autoCapitalize='none'
        keyboardType='number-pad'
        returnKeyType='done'
        value={data?.cep}
        mask="cep"
        inputMaskChange={txt => handleCEP(txt)}
        maxLength={9}
      />

      {/* <PersonalInput
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
      /> */}

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
