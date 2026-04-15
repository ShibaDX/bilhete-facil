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
                            Estudante
                        </Text>
                    </View>
                </View>

              
                <Text style={styles.dataEntrada}>
                    <Ionicons
                        name={"calendar-clear-outline"}
                        size={20}
                        color={"#8e8e93"}
                    />  Membro desde: 21/12/2025
                </Text>

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

{/* site de paleta de cores: https://coolors.co/palettes/popular/red */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf2f4",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    card: {
        backgroundColor: "#FFF",
        padding: 20,
        borderWidth: 0.4,
        borderColor: "#ef233c",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,

        width: "100%",
        maxWidth: 350
    },


    header: {
        flexDirection: "row",
        alignItems: "center"
    },


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
        fontSize: 13,
        color: "#666"
    },

    botaoSair: {
        marginTop: 20,
        backgroundColor: "#ef233c",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center"
    },

    botaoText: {
        color: "#FFF",
    },

    dataEntrada: {
        fontSize: 12,
        color: "#999",      
        marginTop: 15,      
        textAlign: "center"

    },

});