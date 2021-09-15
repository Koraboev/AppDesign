import React, { useState } from "react";
import { StyleSheet, Image, View, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import colors from "../../config/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function MainScreen() {

    const [flower, setFlower] = useState([
        {name: 'Dragon Plants', cost: 25.99, id: '1'},
        {name: 'Ravenea Plants', cost: 20.99, id: '2'},
        {name: 'Dragon Plants', cost: 25.99, id: '3'},
        {name: 'Ravenea Plants', cost: 20.99, id: '4'},
    ]);

    return(
        
        <FlatList
            style={styles.content}
            data={flower}
            renderItem = {({item}) => (
                <View style={styles.blogSection}>
                    <View style={styles.blog}>
                        <TouchableOpacity style={styles.iconBlog}>
                            <Foundation name="heart" size={24} color="tomato" style={styles.iconHeart}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgBlog}>
                            <Image source={require('../../assets/images/flower1.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <View style={styles.costBlog}>
                                <Text style={styles.textStyle}>{item.cost}</Text>
                                <TouchableOpacity>
                                    <MaterialIcons name="add" size={24} color="#FFF" style={styles.iconAdd} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.blog}>
                        <TouchableOpacity style={styles.iconBlog}>
                            <Foundation name="heart" size={24} color="tomato" style={styles.iconHeart}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgBlog}>
                            <Image source={require('../../assets/images/flower1.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <View style={styles.costBlog}>
                                <Text style={styles.textStyle}>{item.cost}</Text>
                                <TouchableOpacity>
                                    <MaterialIcons name="add" size={24} color="#FFF" style={styles.iconAdd} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        />
       
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    blogSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    blog: {
        backgroundColor: colors.lighGrey,  
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 15,
        marginVertical: 7,    
    },
    iconBlog: {
        flexDirection: 'row-reverse',
    },
    iconHeart: {
        backgroundColor: '#F2CDC8',
        width: 35,
        height: 35,
        paddingTop: 6.5,
        paddingLeft: 8,
        borderRadius: 35,
    },
    imgBlog: {
        paddingVertical: 10,
    },
    img: {
        width: 150,
        height: 150,
    },
    costBlog: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    iconAdd: {
        backgroundColor: colors.green,
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 5,
    }
});