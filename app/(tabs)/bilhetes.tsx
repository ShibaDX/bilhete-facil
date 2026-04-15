import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, Image, FlatList, ScrollView } from "react-native";
import { DADOS_BILHETES } from "./mocks/bilhete";
import { Ionicons } from "@expo/vector-icons";

export default function BilhetesScreen() {

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
                    <Text style={styles.cardStatus}>
                        <Ionicons
                            name={"checkmark"}
                            size={14}
                            color={"#6a994e"}
                        /> {item.status}</Text>

                    <View style={styles.linhaPontilhada} />
                    <Text style={styles.cardCodigo}>{item.codigo}</Text>
                </View>

            </View>

        )
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                    <Ionicons
                        name={"ticket"}
                        size={28}
                        color={"#d90429"}
                    /> Meus Bilhetes</Text>
                <Text style={styles.quantidade}>5 bilhetes</Text>
            </View>
            <ScrollView>


                <FlatList
                    data={DADOS_BILHETES}
                    keyExtractor={(item) => item.id}
                    renderItem={renderEvento}
                    contentContainerStyle={styles.body}
                />

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    cabecalho: {
        height: 60,
        width: "100%",
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: "#d90429"
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
        height: 125,
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
        fontSize: 12,
        fontWeight: "500",
        color: "#8e8e93"
    },

    quantidade: {
        fontSize: 14,
        fontWeight: "400",
        color: "#666",                    
        marginTop: 2,                     
        marginStart: 15,
        marginBottom: 15
    },

    cardStatus: {
        color: "#6a994e",
        fontSize: 14,
        marginTop: 4
    },

    linhaPontilhada: {
        height: 0,                  
        borderWidth: 1,            
        borderColor: '#ccc',        
        borderStyle: 'dashed',      
        borderRadius: 1,            
        marginTop: 10,             
        marginBottom: 5,           
    },

    cardCodigo: {
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",          
        letterSpacing: 2,            
        color: "#333"
    }
})

