import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#d90429",
            tabBarInactiveTintColor: "#868686"
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="bilhetes"
                options={{
                    title: "Meus Bilhetes",
                    tabBarIcon: ({ color }) => <FontAwesome name="ticket" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="carrinho"
                options={{
                    title: "Carrinho",
                    tabBarIcon: ({ color }) => <FontAwesome name="cart-plus" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />

        </Tabs>
    )
}