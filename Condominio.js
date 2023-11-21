// informações como: cada vaga reservada por apartamento, quantidade de apartamentos em cada bloco, custo do condominio mensal, pode ser feito reserva de churrasqueiras, 
// agendamento de assembleias de condominios, agendamento para a coleta de lixo, realizar denuncias de irregularidades, realizar eleições, gerar boletos para pagamento do condominio,
// historico das atividades de todos os funcionarios e registro das cameras do porteiro (que pode ser vizualizada apenas pelo sindico)
// #3F3A35 #7D746B #BDBEBE #B28051
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from './logoapenas.png';
import Logo2 from './logoapenas2.png';
import TELA1 from './1.png';
import TELA2 from './2.png';
import TELA3 from './3.png';
import TELA4 from './4.png';
import logonome from './logonome.png';
import { useContext, useState } from 'react'
import { UtilsContext } from "./context";

export const Condominio = (props) => {
    return (
        <View style={styles.container}>

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
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Moradores")} style={styles.telaTouchable}>
                        <Image source={TELA1} style={styles.telaImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}></View>
                <View style={styles.v2}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Visitantes")} style={styles.telaTouchable}>
                        <Image source={TELA2} style={styles.telaImage} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomRow}>
                <View style={styles.v3}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Funcionarios")} style={styles.telaTouchable}>
                        <Image source={TELA3} style={styles.telaImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}></View>
                <View style={styles.v4}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("CoisasCondominio")} style={styles.telaTouchable}>
                        <Image source={TELA4} style={styles.telaImage} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.retangulo}>
                    <Image source={Logo} style={styles.logoFooter1} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Suporte</Text>
                    </TouchableOpacity>
                    <Image source={Logo2} style={styles.logoFooter2} />
                </View>
            </View>
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
    logo: {
        width: 75,
        height: 65,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 6
    },
    logonome: {
        width: 300,  
        height: 70,  
        resizeMode: 'contain', 
        margin: -20
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
    telaTouchable: {
        width: '100%',
        height: '100%',
    },
    telaImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // ou 'stretch' se preferir
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
});

export default Condominio;
