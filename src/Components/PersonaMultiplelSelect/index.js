import React, { useEffect, useState } from 'react';

import { View, StyleSheet, Modal, FlatList, TouchableOpacity, Text, SafeAreaView, TextInput } from 'react-native';


export const PersonaMultiplelSelect = ({ options = [], change, title = '', max }) => {

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setData(options);
    setSearchData(options);
  }, [options]);

  useEffect(() => {
    let arr = [...data];
    setSearchData(arr.filter(i =>
      i.title.toLowerCase().includes(textSearch.toLowerCase()) ||
      i.body.toLowerCase().includes(textSearch.toLowerCase())

    ))
  }, [textSearch]);


  const selectOption = (item) => {
    let index = selectedOptions.findIndex(i => i?.id === item?.id);
    let arrSelected = [...selectedOptions];

    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      if (selectedOptions.length < max) {
        arrSelected.push(item)
      } else {
        alert('Numero máximo de seleções excedido');
      }
    }

    setSelectedOptions(arrSelected);

  }


  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => selectOption(item)}
        style={[{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingHorizontal: 10, paddingVertical: 5 },
        { backgroundColor: selectedOptions?.findIndex(i => i.id === item.id) !== -1 ? '#cff' : '#fff' }]}>
        <Text style={{ fontWeight: selectedOptions?.findIndex(i => i.id === item.id) !== -1 ? '600' : '400' }}>{item?.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.container}
      onPress={() => setVisible(true)}
    >
      <Text numberOfLines={1}>{selectedOptions.length > 0 ? selectedOptions.map(p => `${p.id},`) : 'Selecione um post'}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>+</Text>

      <Modal onRequestClose={() => setVisible(false)}
        animationType='slide'
        visible={visible}>

        <SafeAreaView style={{ flex: 1, }}>

          <View style={styles.header}>

            <View style={styles.headerContent}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={{ fontSize: 14, color: 'blue', fontWeight: '500' }}>Voltar</Text>
              </TouchableOpacity>

              <View>

                <Text style={{ fontSize: 16, fontWeight: '500', color: '#777', textAlign: 'center' }}>{title}</Text>
                <Text style={{ fontSize: 13, fontWeight: '500', color: '#444', textAlign: 'center' }}>Selecione até {max} opções</Text>
              </View>

              <TouchableOpacity onPress={() => {
                change(selectedOptions);
                setVisible(false);
                setTextSearch('');
              }}>
                <Text style={{ fontSize: 14, color: 'blue', fontWeight: '500' }}>Concluir</Text>
              </TouchableOpacity>
            </View>

            {data.length > 10 &&
              <TextInput
                value={textSearch}
                onChangeText={setTextSearch}
                placeholder="Pesquisar"
                style={{ backgroundColor: '#fff', borderRadius: 4, paddingHorizontal: 10, height: 35, marginTop: 5 }} />
            }

          </View>

          <FlatList
            data={searchData}
            keyExtractor={data.id}
            renderItem={({ item }) => renderItem(item)}
          />

        </SafeAreaView>

      </Modal>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12
  },

  header: {
    backgroundColor: '#eee',
    padding: 12
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  }

})