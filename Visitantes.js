import React, { useContext } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { UtilsContext } from "./context";

export default function Visitantes(props) {
    const { setUtils } = useContext(UtilsContext);

    const voltarCondominio = () => {
        setUtils({ ...props, currentScreen: 'Condominio' });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => props.navigation.navigate("Condominio")} style={styles.botaoVoltar}>
                <Text style={styles.textoBotaoVoltar}>Voltar para o Condomínio</Text>
            </TouchableOpacity>
            <Image
                source={require('./logoapenas.png')}  
                style={styles.logo}
            />
            <Text style={styles.titulo}>Visitantes</Text>
            <Text style={styles.descricao}>Bem-vindo à tela de visitantes!</Text>
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
        width: 200,
        height: 150,
        marginBottom: 20,
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
});