import React from "react";
import { View } from "react-native";
import HeadScreen from "./HeadScreen";
import MainScreen from "./MainScreen";
import MenuScreen from "./MenuScreen";

export default function Welcome () {
    return (
        <View>
            <HeadScreen/>
            <MenuScreen/>
            <MainScreen/>
        </View>
    );
}