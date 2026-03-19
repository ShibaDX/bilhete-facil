import { useRouter } from "expo-router";
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const router = useRouter();

    function onSairPress() {
        router.push("/login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.profileImage}
                    source={{ // a imagem só aparece se definir a altura e largura no styles
                        uri: "https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2025/12/21/yuri_alberto_comemora_gol_contra_o_vasco_da_gama_3cdz.jpg"
                    }}
                />

                <Text style={styles.textName}>Yuri Alberto</Text>

                <Text style={styles.textBio}>
                    Artilheiro do Corinthians
                </Text>

                <TouchableOpacity
                    style={styles.botaoSair}
                    onPress={onSairPress}
                >
                    <Text>Sair</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    botaoSair: {
        marginTop: 20,
        backgroundColor: "#FF5A5F",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center"

    },
    profileImage: {
        width: 150, // se não definir a medida, o react redimensiona o tamanho dependendo da tela de cada dispositivo, o tamanho não é exatamente em pixels
        height: 150,
        borderRadius: 75,
        marginBottom: 10
    },
    card: {
        backgroundColor: "#FFF",
        padding: 30,
        borderRadius: 15,
        alignItems: "center",

        // Sombras
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // exclusivo do Android

        width: "100%",
        maxWidth: 350
    },
    textName: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10
    },
    textBio: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        lineHeight: 22
    }
})