// informações como: cada vaga reservada por apartamento, quantidade de apartamentos em cada bloco, custo do condominio mensal, pode ser feito reserva de churrasqueiras, 
// agendamento de assembleias de condominios, agendamento para a coleta de lixo, realizar denuncias de irregularidades, realizar eleições, gerar boletos para pagamento do condominio,
// historico das atividades de todos os funcionarios e registro das cameras do porteiro (que pode ser vizualizada apenas pelo sindico)

import { Text, Image, View, TextInput, Switch, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React, { useContext, useState } from 'react';
import { UtilsContext } from "./Context";

import Logo from './logoapenas.png';

const Condominio = (props) => {
    return (
        <View style={styles.container}>

            <Image
                source={Logo}
                style={styles.logo}
            />
            <Text
                style={styles.bemvindo}>
                Bem-vindo</Text>

            <View style={styles.topRow}>
                <View style={styles.v1}></View>
                <View style={{ marginLeft: 10 }}></View>
                <View style={styles.v2}></View>
            </View>

            <View style={styles.bottomRow}>
                <View style={styles.v3}></View>
                <View style={{ marginLeft: 10 }}></View>
                <View style={styles.v4}></View>
            </View>

            <View style={styles.footer}>
                <View style={styles.v5}>
                    <View style={styles.footerRectangle}></View>
                    <Image source={Logo} style={styles.logoFooter} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 90,
        height: 80,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    bemvindo: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginTop: -90,
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
        borderColor: 'white',
        borderWidth: 2,
    },
    v2: {
        width: 120,
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
    },
    v3: {
        width: 120,
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
    },
    v4: {
        width: 120,
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
    },
    v5: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerRectangle: {
        width: 2,
        height: 30,
        backgroundColor: 'white',
        marginRight: 10,
    },
    logoFooter: {
        width: 60,
        height: 40,
    },
});

export default Condominio;
