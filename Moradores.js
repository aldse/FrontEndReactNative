import React, { useContext, useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, TextInput, Switch, Text, } from 'react-native';
import { Modal, Portal, Button as PaperButton, Provider } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UtilsContext } from "./context";
import imagem from './qrcode.png';
import voltar from './voltar.png';

export default function Moradores(props) {
    const { setUtils } = useContext(UtilsContext);
    const [formData, setFormData] = useState({
        vagaReservada: '',
        quantidadeApartamentos: 0,
        blocos: 0,
        custoCondominio: '',
        reservaChurrasqueira: false,
        agendamentoAssembleia: false,
        agendamentoColetaLixo: false,
        denunciasIrregularidades: '',
        realizarEleicoes: false,
        gerarBoletos: false,
    });

    const voltarCondominio = () => {
        setUtils({ ...props, currentScreen: 'Condominio' });
    };

    const handleSubmit = () => {
        // Aqui você pode enviar os dados para onde for necessário
        console.log('Formulário enviado:', formData);
    };

    const [inputDate, setInputDate] = React.useState(undefined)

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

    const toggleModal1 = () => setModalVisible1(!modalVisible1);
    const toggleModal2 = () => setModalVisible2(!modalVisible2);
    const toggleModal3 = () => setModalVisible3(!modalVisible3);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');

    const toggleModal = () => setModalVisible(!modalVisible);

    const handleSave = () => {
        console.log('Data selecionada:', selectedDate);
        console.log('Descrição:', description);

        // Feche o modal
        toggleModal();
    };

    const [showImage, setShowImage] = useState(false);
    const handleGenerateBoleto = () => {
        setShowImage(true);
        setTimeout(() => setShowImage(false), 3000);
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

            <Text style={styles.titulo}>Moradores</Text>
            <Text style={styles.descricao}>Bem-vindo à tela de moradores!</Text>

            {/* Formulário */}
            <View style={styles.formContainer}>
                <Text style={styles.formLabel}>Vaga reservada</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.vagaReservada}
                    onChangeText={(text) => setFormData({ ...formData, vagaReservada: text })}
                />

                <Text style={styles.formLabel}>Custo do condomínio mensal</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.custoCondominio}
                    onChangeText={(text) => setFormData({ ...formData, custoCondominio: text })}
                />

                <Text style={styles.formLabel}>Reserva de churrasqueiras</Text>
                <SafeAreaProvider>
                    <View style={styles.calendario}>
                        <DatePickerInput
                            locale="en"
                            label="Birthdate"
                            value={inputDate}
                            onChange={(d) => setInputDate(d)}
                            inputMode="start"
                        />
                    </View>
                </SafeAreaProvider>

                <Text style={styles.formLabel}>Agendamento de assembleias de condomínios</Text>
                <PaperButton style={styles.paper} onPress={toggleModal1}><Text style={styles.textagendar}>Agendar</Text></PaperButton>

                <Portal>
                    <Modal
                        visible={modalVisible1}
                        onDismiss={toggleModal1}
                        contentContainerStyle={styles.modalContainer}
                    >
                        <View style={{ padding: 20 }}>
                            <Text style={{ color: "white" }}>Selecione a data:</Text>
                            <SafeAreaProvider>
                                <View style={styles.calendario}>
                                    <DatePickerInput
                                        locale="en"
                                        label="Birthdate"
                                        value={inputDate}
                                        onChange={(d) => setInputDate(d)}
                                        inputMode="start"
                                    />
                                </View>
                            </SafeAreaProvider>
                            <Text style={{ color: "white" }}>Descrição do agendamento:</Text>
                            <TextInput
                                style={styles.descricao2}
                                label="Descrição"
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={styles.touch} onPress={toggleModal1}>
                                    <Text style={{ color: "white" }}>Voltar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touch} onPress={handleSave}>
                                    <Text style={{ color: "white" }}>Salvar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Modal>
                </Portal>

                <Text style={styles.formLabel}>Agendamento para a coleta de lixo</Text>
                <PaperButton style={styles.paper} onPress={toggleModal2}><Text style={styles.textagendar}>Agendar</Text></PaperButton>

                <Portal>
                    <Modal
                        visible={modalVisible2}
                        onDismiss={toggleModal2}
                        contentContainerStyle={styles.modalContainer}
                    >
                        <View style={{ padding: 20 }}>
                            <Text style={{ color: "white" }}>Selecione a data:</Text>
                            <SafeAreaProvider>
                                <View style={styles.calendario}>
                                    <DatePickerInput
                                        locale="en"
                                        label="Birthdate"
                                        value={inputDate}
                                        onChange={(d) => setInputDate(d)}
                                        inputMode="start"
                                    />
                                </View>
                            </SafeAreaProvider>
                            <Text style={{ color: "white" }}>Descrição do agendamento:</Text>
                            <TextInput
                                style={styles.descricao2}
                                label="Descrição"
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={styles.touch} onPress={toggleModal2}>
                                    <Text style={{ color: "white" }}>Voltar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touch} onPress={handleSave}>
                                    <Text style={{ color: "white" }}>Salvar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Modal>
                </Portal>

                <Text style={styles.formLabel}>Realizar denúncias de irregularidades</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.denunciasIrregularidades}
                    onChangeText={(text) => setFormData({ ...formData, denunciasIrregularidades: text })}
                />

                <Text style={styles.formLabel}>Gerar boletos para pagamento do condomínio</Text>
                <PaperButton style={styles.paper} onPress={toggleModal3}><Text style={styles.textagendar}>Gerar Boleto</Text></PaperButton>

                <Portal>
                    <Modal
                        visible={modalVisible3}
                        onDismiss={toggleModal3}
                        contentContainerStyle={styles.modalContainer}
                    >
                        <View style={styles.modalContent}>
                            <Image source={imagem} style={styles.imagem} />
                            <TouchableOpacity style={styles.touch} onPress={toggleModal3}>
                                <Text style={{ color: "white" }}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </Portal>

                {/* Botão de envio */}
                <TouchableOpacity style={styles.botaoEnviar} onPress={handleSubmit}>
                    <Text style={styles.textoBotaoEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    voltar: {
        width: 35,
        height: 35
    },
    container: {
        flex: 1,
        backgroundColor: '#7D746B',
        justifyContent: 'center',
        alignItems: 'center',
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
    formContainer: {
        marginTop: 20,
        width: '80%',
    },
    formLabel: {
        fontSize: 16,
        color: '#3F3A35',
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    botaoEnviar: {
        backgroundColor: '#3F3A35',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotaoEnviar: {
        color: 'white',
        fontSize: 18,
    },
    calendario: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        color: 'green'
    },
    modalContainer: {
        backgroundColor: '#3F3A35',
        padding: 20,
        borderRadius: 10,
        height: 300,
    },
    descricao2: {
        backgroundColor: "white",
        height: 50,
    },
    paper: {
        backgroundColor: "#3F3A35",
    },
    textagendar: {
        fontSize: 16,
        color: 'white'
    },
    touch: {
        marginTop: 10,
        backgroundColor: "#7D746B",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: 30,
        width: 70
    },
    imagem: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

