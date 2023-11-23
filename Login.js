import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Logo from './logoapenas.png';
import voltar from './voltar.png';

const Login = ({ navigation }) => {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleLogin = async () => {
    // Lógica de autenticação no backend
    // ...

    // Exemplo de lógica fictícia (substitua com a lógica real)
    const usuarioAutenticado = await autenticarNoBackend(cpf, senha);

    if (usuarioAutenticado) {
      // Obter o tipo de usuário do backend
      const tipoUsuario = await obterTipoUsuarioDoBackend(cpf);

      // Redirecionar para a página correspondente
      switch (tipoUsuario) {
        case 'morador':
          navigation.navigate('Morador');
          break;
        case 'condominio':
          navigation.navigate('Condominio');
          break;
        case 'visitante':
          navigation.navigate('Visitante');
          break;
        case 'funcionario':
          navigation.navigate('Funcionario');
          break;
        default:
          setMensagemErro('Tipo de usuário não identificado');
      }
    } else {
      setMensagemErro('Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
        <Image source={voltar} style={styles.voltar} />
      </TouchableOpacity>

      <Image source={Logo} style={styles.logo} />

      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCPF(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      {mensagemErro ? <Text style={styles.mensagemErro}>{mensagemErro}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D746B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voltarButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 5,
    padding: 10,
  },
  voltar: {
    width: 35,
    height: 35,
  },
  logo: {
    width: 75,
    height: 65,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F3A35',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#3F3A35',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
  },
  mensagemErro: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
