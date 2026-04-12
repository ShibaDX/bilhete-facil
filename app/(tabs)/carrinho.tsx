import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { DADOS_EVENTOS } from "./mocks/event";
import { Ionicons } from "@expo/vector-icons";

export default function CarrinhoScreen() {

    function eventoRemoverPress() {
        Alert.alert(
            "Remover evento",
            "Deseja mesmo excluir esse evento do seu carrinho?",
            [
                {
                    text: "Sim"

                },
                {
                    text: "Cancelar"
                }
            ]
        );
    }

    function eventoFinalizarPress() {
        Alert.alert(
            "Concluído",
            "Sua presença foi confirmada!",
            [
                {
                    text: "Ok"

                }
            ]
        );
    }

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

                    <Text style={styles.cardPreco}>{item.preco}</Text>

                </View>

                <TouchableOpacity style={styles.botaoRemover} onPress={eventoRemoverPress}>
                    <Ionicons name="trash-outline" size={20} color="#d90429" />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                    <Ionicons
                        name={"cart"}
                        size={28}
                        color={"#d90429"}
                    /> Carrinho</Text>
            </View>

            <FlatList
                data={DADOS_EVENTOS}
                keyExtractor={(item) => item.id}
                renderItem={renderEvento}
                contentContainerStyle={styles.body}
            />

            <View style={styles.finalizar}>
                {/* Agrupamos os textos aqui */}
                <View>
                    <Text style={styles.valorTotal}>Total: R$200,00</Text>
                    <Text style={styles.quantidade}>3 itens</Text>
                </View>

                <TouchableOpacity style={styles.botaoFinalizar} onPress={eventoFinalizarPress}>
                    <Text style={styles.textoFinalizar}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    cabecalho: {
        height: 60,
        width: "100%",
        backgroundColor: '#FFF',
        justifyContent: 'center', // <-- Isso centraliza tudo verticalmente!
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
        height: 100,
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
        fontSize: 11,
        fontWeight: "500",
        color: "#8e8e93"
    },

    cardData: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 3,
        color: "#8e8e93"
    },

    botaoFinalizar: {
        backgroundColor: "#d90429",
        paddingVertical: 12,
        paddingHorizontal: 20, // Diminuí de 40 para 20 para que o botão não esmague os textos
        borderRadius: 15,
        alignItems: "center",
        // Removi o marginBottom: 10 que tinha aqui, não é mais necessário nessa disposição
    },

    textoFinalizar: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 700
    },

    botaoRemover: {
        position: 'absolute', // Define posição absoluta
        bottom: 8,            // 8px de distância da borda inferior
        right: 8,              // 8px de distância da borda esquerda
        padding: 5,           // Dá uma área de toque um pouco maior ao redor do ícone
    },

    finalizar: {
        flexDirection: "row",              // Coloca os itens lado a lado
        justifyContent: "space-between",   // Empurra a view de textos pra esquerda e o botão pra direita
        alignItems: "center",              // Centraliza verticalmente o botão com os textos
        width: "100%",                     // Garante que a barra ocupe toda a largura da tela
        paddingHorizontal: 20,             // Dá um espaço das bordas laterais do celular
        paddingVertical: 15,               // Dá um respiro em cima e embaixo dos elementos
        backgroundColor: "#FFF",
        borderTopWidth: 1.5,                 // (Opcional) Cria uma linha sutil para separar do resto da lista
        borderColor: "#ef233c"
    },
    valorTotal: {
        fontSize: 20,                      // Diminuí um pouquinho (era 22) para caber melhor
        fontWeight: "700",
        color: "#333",
    },
    quantidade: {
        fontSize: 14,
        fontWeight: "400",
        color: "#666",                     // Um tom de cinza para diferenciar do total
        marginTop: 2                       // Espacinho entre o total e a quantidade
    },

})

