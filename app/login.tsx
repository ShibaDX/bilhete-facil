import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();

    function onLoginPress() {
        router.push("/(tabs)/home");
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>

                    <Text style={styles.textTitle}>Login</Text>

                    <Text style={styles.textLogin}>
                        E-mail
                    </Text>
                    <TextInput style={styles.inputLogin} placeholder="Ex: seuemail@email.com" keyboardType="default"></TextInput>

                    <Text style={styles.textLogin}>
                        Senha
                    </Text>
                    <TextInput style={styles.inputLogin} placeholder="********" keyboardType="default" secureTextEntry={true}></TextInput>

                    <TouchableOpacity
                        style={styles.botaoLogin}
                        onPress={onLoginPress}
                    >
                        <Text>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </>
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
    botaoLogin: {

        backgroundColor: "#639aff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center"

    },
    card: {
        backgroundColor: "#FFF",
        padding: 30,
        borderRadius: 15,
        alignItems: "center",

        // Sombras
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // exclusivo do Android

        width: "100%",
        maxWidth: 350
    },
    textTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10
    },
    textLogin: {
        fontSize: 16,
        color: "#666",
        lineHeight: 22,
        marginBottom: 10,
        textAlign: "left",
        alignSelf: "flex-start"
    },
    inputLogin: {
        backgroundColor: '#e7e7e7',
        marginStart: 7,
        marginEnd: 7,
        width: "100%",
        borderRadius: 10,
        marginBottom: 15

    }
})