import React, { useContext, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { UtilsContext } from "./context";
import voltar from './voltar.png';

export default function CoisasCondominio(props) {
    const { setUtils } = useContext(UtilsContext);
    const [historicoModalVisible, setHistoricoModalVisible] = useState(false);
    const [registroModalVisible, setRegistroModalVisible] = useState(false);

    const voltarCondominio = () => {
        setUtils({ ...props, currentScreen: 'Condominio' });
    };

    const openHistoricoModal = () => {
        setHistoricoModalVisible(true);
    };

    const openRegistroModal = () => {
        setRegistroModalVisible(true);
    };

    const closeHistoricoModal = () => {
        setHistoricoModalVisible(false);
    };

    const closeRegistroModal = () => {
        setRegistroModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('./logoapenas.png')}
                style={styles.logo}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate("Condominio")} style={styles.voltarButton} >
                <Image
                    source={voltar}
                    style={styles.voltar}
                />
            </TouchableOpacity>

            <Text style={styles.titulo}>Condominio</Text>
            <Text style={styles.descricao}>Bem-vindo à tela de Condominio!</Text>

            <View style={styles.alinhar}>
                <TouchableOpacity onPress={openHistoricoModal} style={styles.modalButton}>
                    <Text style={styles.textoModal}>Historico de Funcionarios</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={openRegistroModal} style={styles.modalButton}>
                    <Text style={styles.textoModal}>Registro de Cameras</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent visible={historicoModalVisible} onRequestClose={closeHistoricoModal}>
                <TouchableWithoutFeedback onPress={closeHistoricoModal}>
                    <View style={styles.modalContainer}>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Modal transparent visible={registroModalVisible} onRequestClose={closeRegistroModal}>
                <TouchableWithoutFeedback onPress={closeRegistroModal}>
                    <View style={styles.modalContainer}>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    alinhar: {
        marginTop: 20
    },
    voltar: {
        width: 35,
        height: 35
    },
    container: {
        flex: 1,
        backgroundColor: '#7D746B',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 110,
    },
    voltarButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 16,
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
        marginBottom: 10,
    },
    descricao: {
        fontSize: 16,
        color: '#BDBEBE',
    },
    modalButton: {
        backgroundColor: '#3F3A35',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    textoModal: {
        color: 'white',
        fontSize: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        marginTop: 20,
        width: '80%',
    },


});
