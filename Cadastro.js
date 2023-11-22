import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Logo from './logo.png';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [numeroCofre, setNumeroCofre] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
    console.log('Número do Cofre:', numeroCofre);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
        <Text style={styles.voltarButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Image source={Logo} style={styles.logo} />

      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Número do Cofre"
        value={numeroCofre}
        onChangeText={(text) => setNumeroCofre(text)}
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  voltarButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#B28051',
    borderRadius: 5,
    padding: 10,
  },
  voltarButtonText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#7D746B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 65,
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 6,
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
});

export default Cadastro;
