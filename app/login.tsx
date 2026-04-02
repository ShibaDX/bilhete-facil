import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();

    function onLoginPress() {
        router.replace("/(tabs)/home"); // replace = limpa a pilha de telas do app
    }

    const [secureText, setSecureText] = useState(true);

    function trocarEstadoSenha() {
        if (secureText === true) {
            setSecureText(false)
        } else {
            setSecureText(true)
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'padding' : 'height'} // android = height , ios = padding
                style={styles.container}>
                <View style={styles.card}>

                    <Text style={styles.textTitle}>Login</Text>

                    <Text style={styles.textLogin}>
                        E-mail
                    </Text>
                    <TextInput style={styles.inputLogin} placeholder="Ex: email@example.com" keyboardType="email-address"></TextInput>

                    <Text style={styles.textLogin}>
                        Senha
                    </Text>
                    <View style={styles.passwordContainer}>
                        <TextInput style={styles.passwordInput} placeholder="********" keyboardType="default" secureTextEntry={secureText}></TextInput>
                        <TouchableOpacity
                            onPress={trocarEstadoSenha}
                            style={styles.iconContainer}
                        >
                            <Ionicons
                                name={secureText ? "eye-off-outline" : "eye-outline"}
                                size={20}
                                color={"#8e8e93"}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.botaoLogin}
                        onPress={onLoginPress}
                    >
                        <Text>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
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

    },
    passwordContainer: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#e5e5ea",
        borderRadius: 12,
        backgroundColor: "#fbfbfd",
        marginBottom: 10,
        overflow: "hidden"
    },

    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#1c1c1e"
    },

    iconContainer: {
        justifyContent: "center",
        paddingHorizontal: 15
    }

})