// informações como: cada vaga reservada por apartamento, quantidade de apartamentos em cada bloco, custo do condominio mensal, pode ser feito reserva de churrasqueiras, 
// agendamento de assembleias de condominios, agendamento para a coleta de lixo, realizar denuncias de irregularidades, realizar eleições, gerar boletos para pagamento do condominio,
// historico das atividades de todos os funcionarios e registro das cameras do porteiro (que pode ser vizualizada apenas pelo sindico)
// #3F3A35 #7D746B #BDBEBE #B28051

import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Modal, TextInput, ActivityIndicator } from 'react-native';
import Logo from './logoapenas.png';
import LogoM from './logoapenasmarrom.png';
import LogoM2 from './logoapenasmarrom2.png';
import TELA1 from './1.png';
import TELA2 from './2.png';
import TELA3 from './3.png';
import TELA4 from './4.png';
import logonome from './logonome.png';
import voltar from './voltar.png';
import axios from 'axios';

export const Condominio = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  const handleOptionPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleLoginSuccess = () => {
    setLoading(false);
    setModalVisible(false);

    // Substitua "Moradores" pelo nome da página desejada após o login
    props.navigation.navigate("Moradores");
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`http://localhost:8080/usuario/${cpf}/${senha}`);

      if (response.data.length > 0) {
        const usuario = response.data[0];
        console.log(`Usuário autenticado: ${usuario.nome} - Tipo: ${usuario.tipo}`);

        handleLoginSuccess();
      } else {
        setMensagemErro('Usuário ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      setMensagemErro('Erro ao autenticar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Cadastro")} style={styles.cadastroButton}>
        <Text style={styles.cadastroButtonText}>Cadastro</Text>
      </TouchableOpacity>

      <Image
        source={Logo}
        style={styles.logo}
      />

      <Image
        source={logonome}
        style={styles.logonome}
      />

      <View style={styles.topRow}>
        <View style={styles.v1}>
          <TouchableOpacity onPress={() => handleOptionPress("morador")} style={styles.telaTouchable}>
            <Image source={TELA1} style={styles.telaImage} />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 10 }}></View>
        <View style={styles.v2}>
          <TouchableOpacity onPress={() => handleOptionPress("condominio")} style={styles.telaTouchable}>
            <Image source={TELA2} style={styles.telaImage} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.v3}>
          <TouchableOpacity onPress={() => handleOptionPress("visitante")} style={styles.telaTouchable}>
            <Image source={TELA3} style={styles.telaImage} />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 10 }}></View>
        <View style={styles.v4}>
          <TouchableOpacity onPress={() => handleOptionPress("funcionario")} style={styles.telaTouchable}>
            <Image source={TELA4} style={styles.telaImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal de Login */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>
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
            <TouchableOpacity style={styles.voltarButton} onPress={handleModalClose}>
              <Image
                source={voltar}
                style={styles.voltar}
              />
            </TouchableOpacity>
            <View style={styles.emvolta}>
              <View style={styles.ret}>
                <Image source={LogoM} style={styles.logoFooterM1} />
                <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                  <Text style={styles.textoBotaoM}>Entrar</Text>
                </TouchableOpacity>
                <Image source={LogoM2} style={styles.logoFooterM2} />
                {mensagemErro ? <Text style={styles.mensagemErro}>{mensagemErro}</Text> : null}
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.rowOfButtons}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Moradores")} style={[styles.button, { backgroundColor: '#FF5733' }]}>
          <Text style={styles.buttonText}>Morador</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Visitantes")} style={[styles.button, { backgroundColor: '#33FF57' }]}>
          <Text style={styles.buttonText}>Visitante</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Funcionarios")} style={[styles.button, { backgroundColor: '#5733FF' }]}>
          <Text style={styles.buttonText}>Funcionário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("CoisasCondominio")} style={[styles.button, { backgroundColor: '#33B5FF' }]}>
          <Text style={styles.buttonText}>Condomínio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.retangulo}>
          <Image source={Logo} style={styles.logoFooter1} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Suporte</Text>
          </TouchableOpacity>
          <Image source={LogoM2} style={styles.logoFooter2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowOfButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  voltar: {
    width: 25,
    height: 25
  },
  voltarButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  cadastroButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 5,
    padding: 10,
  },
  cadastroButtonText: {
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  v1: {
    width: 120,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  v2: {
    width: 120,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  v3: {
    width: 120,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  v4: {
    width: 120,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  emvolta: {


  },
  ret: {
    borderColor: '#3F3A35',
    borderWidth: 2,
    width: 145,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoFooterM1: {
    width: 35,
    height: 25,
  },
  logoFooterM2: {
    width: 35,
    height: 25,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 5,
  },
  retangulo: {
    borderColor: 'white',
    borderWidth: 1,
    width: 250,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoFooterM1: {
    width: 40,
    height: 30,
  },
  logoFooterM2: {
    width: 40,
    height: 30,
  },
  buttonText: {
    color: 'white',
  },
  telaTouchable: {
    width: '100%',
    height: '100%',
  },
  telaImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 5,
  },
  retangulo: {
    borderColor: 'white',
    borderWidth: 1,
    width: 250,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoFooter1: {
    width: 40,
    height: 30,
  },
  logoFooter2: {
    width: 40,
    height: 30,
  },
  buttonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  mensagemErro: {
    color: 'red',
    marginTop: 10,
  },
  textoBotaoM: {
    fontSize: 15,
    fontWeight: 'bold'
  },
});

export default Condominio;