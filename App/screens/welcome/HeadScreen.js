import React from "react";
import { Ionicons, FontAwesome  } from '@expo/vector-icons';
import { StyleSheet, View, Text, TextInput } from "react-native";
import colors from "../../config/colors";

export default function HeadScreen(){
    return(
        <View style={styles.content}>
            <View style={styles.nameSection}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.plantText}>Plant Shop</Text>
                <FontAwesome name="shopping-cart" size={25} color="#060606" style={styles.cartIcon} />
            </View>
            <View style={styles.searchSection}>
                <View style={styles.searchBlog}>
                    <Ionicons style={styles.searchIcon} name="search" size={20} color="#060606" />
                    <TextInput
                        style={styles.searchText}
                        placeholder="Search"
                    />
                </View>
                <View style={styles.menuIcon}>
                    <Ionicons name="menu" size={24} color="#fff"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingTop: 40,
        backgroundColor: colors.white,
    },
    nameSection: {

    },
    cartIcon: {
        position: 'absolute',
        right: 10,
        top: 5,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: "bold",
    },
    plantText: {
        fontSize: 40,
        fontWeight: "bold",
        color: colors.green,
    },
    ////////////////
    searchSection: {
        marginTop: 40,
        flexDirection: 'row',
    },
    searchBlog: {
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: colors.lighGrey,
    },
    searchText: {
        flexGrow: 1,
        paddingVertical: 12,
        fontSize: 17,
    },
    searchIcon: {
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    menuIcon: {
        paddingHorizontal: 13,
        paddingVertical: 12,
        backgroundColor: colors.green,
        marginLeft: 15,
        borderRadius: 8,
    },
});