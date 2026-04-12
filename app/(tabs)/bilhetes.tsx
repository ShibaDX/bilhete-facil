import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { DADOS_BILHETES } from "./mocks/bilhete";
import { Ionicons } from "@expo/vector-icons";

export default function BilhetesScreen() {

    function renderEvento({ item }) {
        return (
            <View style={styles.card}>
                <Image
                    style={styles.cardImg}
                    source={{ uri: item.imagem }}
                />

                <View style={styles.infoText}>
                    <Text style={styles.cardTitulo}>{item.titulo}</Text>
                    <Text style={styles.cardLocal}>
                        {item.local} • {item.data}</Text>
                    <Text style={styles.cardStatus}>
                        <Ionicons
                            name={"checkmark"}
                            size={14}
                            color={"#6a994e"}
                        /> {item.status}</Text>

                    <View style={styles.linhaPontilhada} />
                    <Text style={styles.cardCodigo}>{item.codigo}</Text>
                </View>

            </View>

        )
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                    <Ionicons
                        name={"ticket"}
                        size={28}
                        color={"#d90429"}
                    /> Meus Bilhetes</Text>
                <Text style={styles.quantidade}>5 bilhetes</Text>
            </View>
            <ScrollView>


                <FlatList
                    data={DADOS_BILHETES}
                    keyExtractor={(item) => item.id}
                    renderItem={renderEvento}
                    contentContainerStyle={styles.body}
                />

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    cabecalho: {
        height: 60,
        width: "100%",
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: "#d90429"
    },
    titulo: {
        fontSize: 28,
        fontFamily: 'Rubik',
        fontWeight: "800", // Lembre-se que o React Native prefere strings no fontWeight
        marginStart: 15,
        color: '#d90429',
        // marginBottom: 15 foi removido para não atrapalhar o centro
    },
    body: {
        backgroundColor: "#FFF",
        height: '100%',
        alignItems: 'center'
    },


    card: {
        backgroundColor: "#FFF",
        width: 340,
        height: 125,
        marginTop: 15,
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ef233c",
        flexDirection: "row",
        position: 'relative' // <-- Adicione isto para o posicionamento absoluto funcionar corretamente
    },
    cardImg: {
        height: "100%",
        width: 90,
        // Removi o marginBottom que tinha aqui, não é mais necessário
    },
    infoText: {
        flex: 1,                  // Faz o texto ocupar todo o espaço restante à direita da imagem
        justifyContent: "center", // Centraliza o bloco de texto verticalmente
        paddingHorizontal: 15,    // Dá um respiro entre a imagem, o texto e a borda direita
    },

    // Diminuí levemente os tamanhos de fonte e margens para caberem perfeitamente nos 100px de altura
    cardTitulo: {
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 2,
        color: "#d90429"
    },
    cardPreco: {
        fontSize: 13,
        fontWeight: "700",
        marginTop: 10
    },

    cardLocal: {
        fontSize: 12,
        fontWeight: "500",
        color: "#8e8e93"
    },

    quantidade: {
        fontSize: 14,
        fontWeight: "400",
        color: "#666",                     // Um tom de cinza para diferenciar do total
        marginTop: 2,                       // Espacinho entre o total e a quantidade
        marginStart: 15,
        marginBottom: 15
    },

    cardStatus: {
        color: "#6a994e",
        fontSize: 14,
        marginTop: 4
    },

    linhaPontilhada: {
        height: 0,                   // A View não tem altura real, é só a borda
        borderWidth: 1,              // Espessura do pontilhado
        borderColor: '#ccc',         // Um cinza claro para ficar sutil
        borderStyle: 'dashed',       // O segredo do pontilhado
        borderRadius: 1,             // Hack obrigatório para o pontilhado funcionar no Android!
        marginTop: 10,               // Espaço acima da linha
        marginBottom: 5,             // Espaço abaixo da linha
    },

    cardCodigo: {
        justifyContent: "center",
        textAlign: "center",
        // Removi o marginTop: 10 daqui, pois agora a linha pontilhada já está dando esse espaçamento
        fontWeight: "bold",          // (Opcional) Fica legal deixar o código em negrito!
        letterSpacing: 2,            // (Opcional) Afasta um pouquinho as letras para parecer código de barras
        color: "#333"
    }
})

