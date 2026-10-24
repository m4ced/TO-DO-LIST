import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 22,
    paddingTop: 65
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30
  },

  formulario: {
    backgroundColor: '#1A1A1A',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 30
  },

  campo: {
    backgroundColor: '#262626',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    marginBottom: 14
  },

  botao: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#111111',
    fontSize: 14,
    fontWeight: 'bold'
  },

  tituloLista: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },

  tarefa: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#303030',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textoTarefa: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    marginRight: 8
  },

  botaoExcluir: {
    backgroundColor: '#303030',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 7
  },

  textoExcluir: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold'
  }
});

export default estilos;