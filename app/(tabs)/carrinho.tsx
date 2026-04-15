import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList, Alert } from "react-native";
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
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 28,
        fontFamily: 'Rubik',
        fontWeight: "800", 
        marginStart: 15,
        color: '#d90429',
       
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
        position: 'relative'
    },
    cardImg: {
        height: "100%",
        width: 90,
       
    },
    infoText: {
        flex: 1,                  
        justifyContent: "center", 
        paddingHorizontal: 15,   
    },

   
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
        paddingHorizontal: 20, 
        borderRadius: 15,
        alignItems: "center",
       
    },

    textoFinalizar: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 700
    },

    botaoRemover: {
        position: 'absolute', 
        bottom: 8,          
        right: 8,           
        padding: 5,          
    },

    finalizar: {
        flexDirection: "row",             
        justifyContent: "space-between",  
        alignItems: "center",              
        width: "100%",                     
        paddingHorizontal: 20,            
        paddingVertical: 15,              
        backgroundColor: "#FFF",
        borderTopWidth: 1.5,               
        borderColor: "#ef233c"
    },
    valorTotal: {
        fontSize: 20,                      
        fontWeight: "700",
        color: "#333",
    },
    quantidade: {
        fontSize: 14,
        fontWeight: "400",
        color: "#666",                  
        marginTop: 2               
    },

})

