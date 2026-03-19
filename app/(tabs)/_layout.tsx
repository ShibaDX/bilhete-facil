import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#135de7",
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
                name="eventos"
                options={{
                    title: "Eventos",
                    tabBarIcon: ({ color }) => <FontAwesome name="calendar" size={24} color={color} />
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