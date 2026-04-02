import { Ionicons } from "@expo/vector-icons";
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

                <View style={styles.header}>
                    <Image
                        style={styles.profileImage}
                        source={{
                            uri: "https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2025/12/21/yuri_alberto_comemora_gol_contra_o_vasco_da_gama_3cdz.jpg"
                        }}
                    />

                    <View style={styles.info}>
                        <Text style={styles.textName}>Yuri Alberto</Text>
                        <Text style={styles.textBio}>
                            Artilheiro do Corinthians
                        </Text>
                    </View>

                </View>
                <TouchableOpacity
                    style={styles.botaoSair}
                    onPress={onSairPress}
                >
                    <Text style={styles.botaoText}>Sair</Text>
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

    card: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 15,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,

        width: "100%",
        maxWidth: 350
    },

    // 🔥 NOVO: container da linha
    header: {
        flexDirection: "row",
        alignItems: "center"
    },

    // 🔥 NOVO: container dos textos
    info: {
        marginLeft: 15,
        flex: 1
    },

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },

    textName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333"
    },

    textBio: {
        fontSize: 14,
        color: "#666",
        marginTop: 5
    },

    botaoSair: {
        marginTop: 20,
        backgroundColor: "#ff3b41",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center"
    },

    botaoText: {
        color: "#FFF"
    },

    dataEntrada: {

    },
});