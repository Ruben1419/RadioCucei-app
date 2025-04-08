import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Platform,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Importar useNavigation
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Programa" component={ProgramaScreen} />
      <Stack.Screen name="Nosotros" component={NosotrosScreen} />
      <Stack.Screen name="Contacto" component={ContactoScreen} />
      <Stack.Screen name="LikedSongs" component={LikedSongsScreen} />
    </Stack.Navigator>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Menu = ({ isMenuVisible, toggleMenu }) => {
  const navigation = useNavigation(); // Usar useNavigation para obtener el objeto navigation

  const menuItems = [
    {
      title: "Liked Songs",
      onPress: () => {
        /* Lógica para Liked Songs */
      },
    },
    { title: "Programa", onPress: () => navigation.navigate("Programa") },
    { title: "Nosotros", onPress: () => navigation.navigate("Nosotros") },
    { title: "Contacto", onPress: () => navigation.navigate("Contacto") },
    { title: "Liked Songs", onPress: () => navigation.navigate("LikedSongs") },
  ];

  const translateX = useRef(new Animated.Value(-windowWidth)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isMenuVisible ? 0 : -windowWidth,
      duration: 300,
      easing: isMenuVisible ? Easing.out(Easing.cubic) : Easing.in(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [isMenuVisible, translateX]);

  return (
    <Animated.View
      style={[styles.menuContainer, { transform: [{ translateX }] }]}
    >
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIconTopLeft}>
        <Ionicons name="close" size={28} color="black" />
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollViewMenu}
        showsVerticalScrollIndicator={false}
      >
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <Text style={styles.menuText}>{item.title}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    height: windowHeight,
    width: windowWidth * 0.75,
    backgroundColor: "white",
    paddingTop: 20,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  menuText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  arrow: {
    color: "#000000",
    fontSize: 18,
  },
  menuIconTopLeft: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 4,
    padding: 10,
  },
  scrollViewMenu: {
    marginTop: 80,
  },
});

export default Menu;
