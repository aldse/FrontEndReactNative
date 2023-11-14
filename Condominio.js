// informações como: cada vaga reservada por apartamento, quantidade de apartamentos em cada bloco, custo do condominio mensal, pode ser feito reserva de churrasqueiras, 
// agendamento de assembleias de condominios, agendamento para a coleta de lixo, realizar denuncias de irregularidades, realizar eleições, gerar boletos para pagamento do condominio,
// historico das atividades de todos os funcionarios e registro das cameras do porteiro (que pode ser vizualizada apenas pelo sindico)

import { Text, Image, View, TextInput, Switch, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React, { useContext, useState } from 'react';
import { UtilsContext } from "./Context";

export default function Condominio(props) {
    return (
        <>
            <View
                style={{
                    backgroundColor: "black",
                    height: "100%",
                    width: "100%",
                }}>

            </View>
        </>
    );
}
