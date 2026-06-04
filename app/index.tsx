import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default async function Index() {
    const router = useRouter();

    useEffect(() => {
        async function verificarLoginAnterior() {
            const token = await AsyncStorage.getItem("user-token");

            if (token) {
                router.replace("/(tabs)/home");
            } else {
                router.replace("login")
            }

        }
        verificarLoginAnterior();

    }, [router]);

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        }}>
            <ActivityIndicator size={"large"} />
        </View>
    )

}