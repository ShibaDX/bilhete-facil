import { Stack } from "expo-router";
import { CartProvider } from "../contexts/CartContext";

export default function RootLayout() {
    return (
        <CartProvider>
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="evento/[id]" />
            <Stack.Screen name="registrar" />
        </Stack>
        </CartProvider>
    );
}