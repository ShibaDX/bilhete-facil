import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { DADOS_EVENTOS } from "../(tabs)/mocks/event"; // Verifique se o caminho do import está correto para a sua estrutura
import { Ionicons } from "@expo/vector-icons";


export default function DetalhesEventoScreen() {
    // 1. Pesca o ID que veio lá da HomeScreen
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // 2. Procura na sua lista mockada qual evento tem esse exato ID
    const eventoSelecionado = DADOS_EVENTOS.find((evento) => evento.id === id);

    // 3. Tratamento de erro básico caso o evento não seja encontrado
    if (!eventoSelecionado) {
        return (

            <View style={styles.containerErro}>
                <Text>Evento não encontrado.</Text>
            </View>

        );
    }

        function eventoAdicionarPress() {
            Alert.alert(
                "Adicionado",
                "O evento foi adicionado no seu carrinho!",
                [
                    {
                        text: "Ok"
    
                    }
                ]
            );
        }

    // 4. Renderiza a tela dinamicamente usando os dados do evento encontrado
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#edf2f4" }}>
            <ScrollView style={styles.container}>

                <TouchableOpacity
                    style={styles.botaoVoltar}
                    onPress={() => router.back()}
                >
                    <Ionicons
                        name={"arrow-back"}
                        size={20}
                        color={"#ef233c"}
                    />
                </TouchableOpacity>

                <Image
                    source={{ uri: eventoSelecionado.imagem }}
                    style={styles.imagemCapa}
                />

                <View style={styles.conteudo}>
                    <Text style={styles.titulo}>{eventoSelecionado.titulo}</Text>
                    <Text style={styles.preco}>{eventoSelecionado.preco}</Text>

                    <Text style={styles.conteudoTitulo}>
                        <Ionicons
                            name={"location-outline"}
                            size={24}
                            color={"#d90429"} /> Local
                    </Text>
                    <Text style={styles.conteudoTexto}>
                        {eventoSelecionado.local}
                    </Text>

                    <Text style={styles.conteudoTitulo}>
                        <Ionicons
                            name={"time-outline"}
                            size={24}
                            color={"#d90429"} /> Data e Horário
                    </Text>
                    <Text style={styles.conteudoTexto}>
                        {eventoSelecionado.data}
                    </Text>

                    <Text style={styles.conteudoTitulo}>
                        <Ionicons
                            name={"paper-plane-outline"}
                            size={24}
                            color={"#d90429"} /> Sobre o evento
                    </Text>
                    <Text style={styles.conteudoTexto}>
                        Prepare-se para mergulhar no futuro da tecnologia! Este evento reúne mentes criativas para discutir as últimas tendências em inovação, arquitetura de sistemas e desenvolvimento de software. Uma excelente oportunidade para fazer networking, trocar ideias sobre projetos reais e descobrir as ferramentas que estão moldando o mercado atual.
                    </Text>

                    <TouchableOpacity style={styles.botaoInscrever} onPress={eventoAdicionarPress}>
                        <Text style={styles.textoInscrever}>
                            <Ionicons
                                name={"ticket"}
                                size={20}
                                color={"#ffffff"}
                            /> Garantir Ingresso</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    containerErro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagemCapa: {
        width: "100%",
        height: 220,
    },
    conteudo: {
        padding: 20,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#d90429",
        marginBottom: 10,
    },
    preco: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    botaoVoltar: {
        width: 40,            // Aumentei levemente para melhorar a área de clique
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ef233c",
        alignItems: "center",
        justifyContent: "center",

        // --- MÁGICA DO POSICIONAMENTO AQUI ---
        position: "absolute", // Faz o botão flutuar ignorando o fluxo da tela
        top: 15,              // Distância do topo
        left: 15,             // Distância da esquerda
        zIndex: 10,           // Garante que fique por cima da imagem da capa
    },
    conteudoTitulo: {
        fontSize: 24,
        fontWeight: "700"
    },
    conteudoTexto: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 15
    },
    botaoInscrever: {
        backgroundColor: "#d90429",
        paddingVertical: 15,
        paddingHorizontal: 60,
        marginBottom: 10,
        marginStart: -20,
        marginTop: 10,
        borderRadius: 15,
        alignItems: "center",
        alignSelf: 'center'

    },
    textoInscrever: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 700
    }
});