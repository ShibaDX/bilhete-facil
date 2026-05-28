import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { DADOS_EVENTOS } from "../(tabs)/mocks/event";
import React, { useEffect, useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useCart } from '../../hooks/useCart';
import { Event } from "../(tabs)/types/event";
import { buscarEventoPorId } from "../../services/eventService";


export default function DetalhesEventoScreen() {
        // resgata os parâmetros passados na navegação
    const { id } = useLocalSearchParams<{ id: string }>();
    const [event, setEvent] = useState<Event | null>(null);
    const router = useRouter();
    const { adicionarItem, estaNoCarrinho } = useCart();

    const noCarrinho = estaNoCarrinho(id as string);

    async function carregarEvento() {
        const eventoCarregado = await buscarEventoPorId(id);
        setEvent(eventoCarregado);
    }

    useEffect(() => {
        carregarEvento()
    }, [])

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
                    source={{ uri: event?.imagem }}
                    style={styles.imagemCapa}
                />

                <View style={styles.conteudo}>
                    <Text style={styles.titulo}>{event?.titulo}</Text>
                    <Text style={styles.preco}>{event?.preco}</Text>

                    <Text style={styles.conteudoTitulo}>
                        <Ionicons
                            name={"location-outline"}
                            size={24}
                            color={"#d90429"} /> Local
                    </Text>
                    <Text style={styles.conteudoTexto}>
                        {event?.local}
                    </Text>

                    <Text style={styles.conteudoTitulo}>
                        <Ionicons
                            name={"time-outline"}
                            size={24}
                            color={"#d90429"} /> Data e Horário
                    </Text>
                    <Text style={styles.conteudoTexto}>
                        {event?.data}
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

                    <TouchableOpacity style={styles.botaoInscrever}
                        onPress={async () => {
                            if (noCarrinho) {
                                router.push('/(tabs)/cart');
                                return;
                            }
                            await adicionarItem({
                                id: id as string,
                                titulo: event?.titulo as string,
                                local: event?.local as string,
                                imagem: event?.imagem as string,
                                data: event?.data as string,
                                preco: event?.preco as string,
                            });
                            Alert.alert('Adicionado!', `"${event?.titulo}" foi adicionado ao carrinho.`, [
                                { text: 'Ver Carrinho', onPress: () => router.push('/(tabs)/cart') },
                                { text: 'Continuar', style: 'cancel' },
                            ]);
                        }}

                    >
                        <Text style={styles.textoInscrever}>
                            <Ionicons
                                name={"ticket"}
                                size={20}
                                color={"#ffffff"}
                            /> {noCarrinho ? 'Ver no Carrinho' : 'Garantir Ingresso'}</Text>
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
        width: 40,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ef233c",
        alignItems: "center",
        justifyContent: "center",


        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 10,
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