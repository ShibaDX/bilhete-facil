import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { registrar } from "../services/registerService";

export default function RegistrarScreen() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    

    const [carregando, setCarregando] = useState(false);

    async function clicouEmRegistrar() {
        if (!nome || !email || !senha) {
            Alert.alert("Atenção!", "Todos os campos são obrigatórios.");
            return;
        }

        if (senha.length < 6) {
            Alert.alert("Atenção!", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert("Atenção!", "As senhas não coincidem.");
            return;
        }

        setCarregando(true);

        try {
            const token = await registrar(nome, email, senha);
            
            
            await AsyncStorage.setItem("user-token", token);
            
            router.replace("/(tabs)/home");
            
        } catch (erro: any) {
            // Captura os erros retornados pela API
            const status = erro?.response?.status;
            
            if (status === 409) {
                Alert.alert("Atenção!", "Este e-mail já está cadastrado.");
            } else if (status === 400) {
                Alert.alert("Atenção!", "Dados inválidos. Verifique as informações preenchidas.");
            } else {
                Alert.alert("Erro", "Não foi possível conectar. Tente novamente.");
            }
        } finally {
            setCarregando(false); 
        }
    }

    const [secureText, setSecureText] = useState(true);
    const [secureTextC, setSecureTextC] = useState(true);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.textTitle}>Registrar-se</Text>

                <Text style={styles.textForm}>Nome</Text>
                <TextInput style={styles.inputForm} placeholder="Ex: Rodrigo Garro" keyboardType="default" onChangeText={setNome}></TextInput>

                <Text style={styles.textForm}>E-mail</Text>
                <TextInput style={styles.inputForm} placeholder="Ex: email@example.com" keyboardType="email-address" onChangeText={setEmail} autoCapitalize="none"></TextInput>

                <Text style={styles.textForm}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.passwordInput} placeholder="********" keyboardType="default" secureTextEntry={secureText} onChangeText={setSenha}></TextInput>
                    <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.iconContainer}>
                        <Ionicons name={secureText ? "eye-off-outline" : "eye-outline"} size={20} color={"#8e8e93"} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.textForm}>Confirmar Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.passwordInput} placeholder="********" keyboardType="default" secureTextEntry={secureTextC} onChangeText={setConfirmarSenha}></TextInput>
                    <TouchableOpacity onPress={() => setSecureTextC(!secureTextC)} style={styles.iconContainer}>
                        <Ionicons name={secureTextC ? "eye-off-outline" : "eye-outline"} size={20} color={"#8e8e93"} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={[styles.botaoForm, carregando && { opacity: 0.7 }]} 
                    onPress={clicouEmRegistrar}
                    disabled={carregando}
                >
                    {carregando ? (
                        <ActivityIndicator color="#FFF" />
                    ) : (
                        <Text style={styles.botaoText}>Registrar</Text>
                    )}
                </TouchableOpacity>

                <Text onPress={() => { router.back() }} style={styles.loginText}>
                    Já tenho uma conta
                </Text>
            </View>
        </KeyboardAvoidingView>
    
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
    botaoForm: {
        backgroundColor: "#ef233c",
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
        borderWidth: 0.5,
        borderColor: "#ef233c",

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
    textForm: {
        fontSize: 16,
        color: "#666",
        lineHeight: 22,
        marginBottom: 10,
        textAlign: "left",
        alignSelf: "flex-start"
    },
    inputForm: {
        backgroundColor: '#fbfbfd',
        borderColor: "#e5e5ea",
        borderWidth: 1,
        width: "100%",
        height: 50,
        borderRadius: 12,
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
    },

    botaoText: {
        color: "#FFF"
    },
    loginText: {
        color: "#11a0ff",
        marginTop: 15
    }

})