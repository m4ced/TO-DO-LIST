import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilos from './style';

export default function App() {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const dados = await AsyncStorage.getItem('tarefas');

    if (dados != null) {
      setLista(JSON.parse(dados));
    }
  }

  async function salvar(novaLista) {
    setLista(novaLista);
    await AsyncStorage.setItem('tarefas', JSON.stringify(novaLista));
  }

  function adicionar() {
    if (texto != '') {
      let novaLista = [...lista, texto];

      salvar(novaLista);
      setTexto('');
    }
  }

  function excluir(posicao) {
    let novaLista = [];

    for (let i = 0; i < lista.length; i++) {
      if (i != posicao) {
        novaLista.push(lista[i]);
      }
    }

    salvar(novaLista);
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Tarefas</Text>

      <View style={estilos.formulario}>
        <TextInput
          style={estilos.campo}
          placeholder="Digite uma tarefa"
          placeholderTextColor="#888888"
          value={texto}
          onChangeText={(txt) => setTexto(txt)}
        />

        <TouchableOpacity style={estilos.botao} onPress={adicionar}>
          <Text style={estilos.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <Text style={estilos.tituloLista}>Minhas tarefas</Text>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={estilos.tarefa}>
            <Text style={estilos.textoTarefa}>{item}</Text>

            <TouchableOpacity
              style={estilos.botaoExcluir}
              onPress={() => excluir(index)}
            >
              <Text style={estilos.textoExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}