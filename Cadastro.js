import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Picker, Modal, } from 'react-native';
import Logo from './logoapenas.png';
import voltar from './voltar.png';
import axios from 'axios';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [tipo, setTipoUsuario] = useState('morador');
  const [modalVisible, setModalVisible] = useState(false);
  const [senhaIncorreta, setSenhaIncorreta] = useState(false);
  const senhaRef = useRef('');

  const handleSubmit = async () => {
    if (tipo === 'condominio' && senha !== '000') {
      setModalVisible(true);
    } else {
      navigation.navigate('Condominio', { nome, email, senha, cpf, tipo });
    }

    try {
      const response = await axios.post("http://localhost:8080/usuario", {
        nome,
        email,
        senha,
        cpf,
        tipo:tipo
      });

      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    };
  };

  
  const handleTipoUsuarioChange = (itemValue) => {
    setSenha('');
    setTipoUsuario(itemValue);
    if (itemValue === 'condominio') {
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    if (tipo === 'condominio' && senhaRef.current === '000') {
      setTimeout(() => {
        setTipoUsuario('condominio');
      }, 3000);
    } else {
      setSenhaIncorreta(false);
      setTipoUsuario('morador');
    }
  };

  const handleModalOK = () => {
    if (senhaRef.current === '000') {
      setTimeout(() => {
        setModalVisible(false);
      }, 1000);
    } else {
      setSenhaIncorreta(true);
      setTimeout(() => {
        setSenhaIncorreta(false);
        setTipoUsuario('morador');
        setModalVisible(false);
      }, 2000);
    }
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
        <Image source={voltar} style={styles.voltar} />
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
        onChangeText={(text) => {
          setSenha(text);
          senhaRef.current = text;
        }}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Cpf"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <Picker
        selectedValue={tipo}
        style={styles.input}
        onValueChange={handleTipoUsuarioChange}
      >
        <Picker.Item label="Morador" value="morador" />
        <Picker.Item label="Funcionário" value="funcionario" />
        <Picker.Item label="Visitante" value="visitante" />
        <Picker.Item label="Adm Condomínio" value="condominio" />
      </Picker>

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Modal para senha de Adm Condomínio */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Digite a senha para Adm Condomínio:</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={(text) => {
                setSenha(text);
                senhaRef.current = text;
              }}
              secureTextEntry
            />
            <TouchableOpacity style={styles.botao} onPress={handleModalOK}>
              <Text style={styles.textoBotao}>OK</Text>
            </TouchableOpacity>
            {senhaIncorreta && senha !== '000' && (
              <Text style={styles.senhaIncorretaText}>
                Senha incorreta, tente novamente.
              </Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  voltar: {
    width: 35,
    height: 35
  },
  voltarButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#7D746B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 55,
    height: 45,
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 6
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  senhaIncorretaText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Cadastro;
