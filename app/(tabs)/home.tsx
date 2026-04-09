import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { DADOS_EVENTOS } from "./mocks/event";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {

    const router = useRouter(); // <-- 2. Inicialize o roteador

    // 3. Crie a função de navegação
    function botaoInscreverPress(idEvento) {
        // Redireciona para a pasta 'evento' e passa o ID dinâmico na URL
        router.push(`/evento/${idEvento}`); 
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
                    <Text style={styles.cardPreco}>{item.preco}</Text>
                    <View style={styles.divisor} />
                    <Text style={styles.cardData}>
                        <Ionicons
                            name={"calendar-number-outline"}
                            size={20}
                            color={"#8e8e93"}
                        /> {item.data}</Text>
                    <Text style={styles.cardLocal}>
                        <Ionicons
                            name={"location-outline"}
                            size={20}
                            color={"#8e8e93"}
                        />{item.local}</Text>


                    <TouchableOpacity style={styles.botaoInscrever}>
                        <Text style={styles.textoInscrever} onPress={() => botaoInscreverPress(item.id)}>Quero me inscrever</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.cabecalho}>
                    <Text style={styles.titulo}>Descubra Eventos</Text>                           {/* define o tipo de teclado do input, impacta no UX */}
                    <TextInput style={styles.barraPesquisa} placeholder="Buscar eventos, shows, palestras..." keyboardType="default"></TextInput>
                </View>
                <View style={styles.body}>

                    {/* flatlist funciona igual o map, porém, é mais eficiente quando há uma grande quantidade de dados 
                    pois renderiza apenas alguns itens de cada vez, enquanto o map já faz todos de uma vez, o que poderia
                    afetar muito negativamente o desempenho
                */}
                    <FlatList
                        data={DADOS_EVENTOS}
                        keyExtractor={(item) => item.id}
                        renderItem={renderEvento}
                        contentContainerStyle={styles.body}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    cabecalho: {
        height: 100,
        width: "100%",
        backgroundColor: '#ffffff'

    },
    titulo: {
        fontSize: 28,
        fontFamily: 'Rubik',
        fontWeight: 800,
        marginStart: 15,
        marginBottom: 15,
        color: '#d90429'
    },
    barraPesquisa: {
        backgroundColor: '#e9e9e9',
        marginStart: 15,
        marginEnd: 15,
        borderRadius: 10,

    },
    body: {

        backgroundColor: '#edf2f4',
        height: '100%',
        alignItems: 'center'
    },
    card: {
        backgroundColor: "#FFF",
        width: 300,
        marginTop: 15,
        borderRadius: 30,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ef233c",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // exclusivo do Android
    },
    infoText: {
        marginStart: 20
    },
    cardImg: {
        height: 160,
        width: "100%",
        marginBottom: 10,
    },
    cardTitulo: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 3,
        color: "#d90429"
    },
    cardData: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 3,
        color: "#8e8e93"
    },
    cardLocal: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 15,
        color: "#8e8e93"
    },
    cardPreco: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10
    },
    botaoInscrever: {
        backgroundColor: "#d90429",
        paddingVertical: 12,
        paddingHorizontal: 50,
        marginBottom: 10,
        marginStart: -20,
        borderRadius: 15,
        alignItems: "center",
        alignSelf: 'center'

    },
    textoInscrever: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 700
    },

    divisor: {
        height: 1,                  // A espessura da linha
        backgroundColor: "#e0e0e0", // Um cinza claro para ficar sutil
        marginRight: 20,            // Para não colar na borda direita do card
        marginBottom: 10            // Espaço entre a linha e a data
    },

})