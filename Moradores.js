import React, { useContext, useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, TextInput, Switch, Text, } from 'react-native';
import { Modal, Portal, Button as PaperButton, Provider } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UtilsContext } from "./context";

export default function Moradores(props) {
    const { setUtils } = useContext(UtilsContext);
    const [formData, setFormData] = useState({
        vagaReservada: false,
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

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');

    const toggleModal = () => setModalVisible(!modalVisible);

    const handleSave = () => {
        // Faça algo com a data selecionada (selectedDate) e a descrição (description)
        console.log('Data selecionada:', selectedDate);
        console.log('Descrição:', description);

        // Feche o modal
        toggleModal();
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('./logoapenas.png')}
                style={styles.logo}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate("Condominio")} style={styles.botaoVoltar}>
                <Text style={styles.textoBotaoVoltar}>Voltar para o Condomínio</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Moradores</Text>
            <Text style={styles.descricao}>Bem-vindo à tela de moradores!</Text>

            {/* Formulário */}
            <View style={styles.formContainer}>
                <Text style={styles.formLabel}>Vaga reservada</Text>
                <Switch
                    value={formData.vagaReservada}
                    onValueChange={(value) => setFormData({ ...formData, vagaReservada: value })}
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
                <PaperButton onPress={toggleModal}>Selecionar Data</PaperButton>

                {/* Modal */}
                <Portal>
                    <Modal
                        visible={modalVisible}
                        onDismiss={toggleModal}
                        contentContainerStyle={styles.modalContainer}
                    >
                        <View style={{ padding: 20 }}>
                            <Text>Selecione a data:</Text>
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
                            <Text>Escreva sua descrição:</Text>
                            <TextInput
                                style={styles.descricao2}
                                label="Descrição"
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                            />

                            <PaperButton onPress={toggleModal}>Voltar</PaperButton>
                            <PaperButton onPress={handleSave}>Salvar</PaperButton>
                        </View>
                    </Modal>
                </Portal>

                <Text style={styles.formLabel}>Agendamento para a coleta de lixo</Text>
                <Switch
                    value={formData.agendamentoColetaLixo}
                    onValueChange={(value) => setFormData({ ...formData, agendamentoColetaLixo: value })}
                />

                <Text style={styles.formLabel}>Realizar denúncias de irregularidades</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.denunciasIrregularidades}
                    onChangeText={(text) => setFormData({ ...formData, denunciasIrregularidades: text })}
                />

                <Text style={styles.formLabel}>Gerar boletos para pagamento do condomínio</Text>
                <Switch
                    value={formData.gerarBoletos}
                    onValueChange={(value) => setFormData({ ...formData, gerarBoletos: value })}
                />

                {/* Botão de envio */}
                <TouchableOpacity style={styles.botaoEnviar} onPress={handleSubmit}>
                    <Text style={styles.textoBotaoEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D746B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoVoltar: {
        backgroundColor: '#3F3A35',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    textoBotaoVoltar: {
        color: 'white',
        fontSize: 16,
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
    },
    textoBotaoEnviar: {
        color: 'white',
        fontSize: 16,
    },
    calendario: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        color: 'green'
    },
    modalContainer: {
        backgroundColor: '#3F3A35' ,
        padding: 20,
        borderRadius: 10, 
        height: 300,
      },
      descricao2: {
        backgroundColor: "red",
        height: 50,
      },
});

