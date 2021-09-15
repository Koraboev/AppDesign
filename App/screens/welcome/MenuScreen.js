import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../config/colors";

export default function MenuScreen() {

    return(
        <View style={styles.content}>
            <View style={styles.menuSection}>
                <Text style={styles.menuList}>popular</Text>
                <Text style={styles.menuList}>organic</Text>
                <Text style={styles.menuList}>indoors</Text>
                <Text style={styles.menuList}>synthetic</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    menuSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    menuList: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.gray,
        paddingVertical: 10,
        textTransform: 'uppercase',
    },
});