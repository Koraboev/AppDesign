import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import colors from "../../config/colors";

export default function MainScreen() {

    return(
        <ScrollView>
            <View style={styles.content}>
            <View style={styles.blogSection}>
                <View style={styles.blog}>
                    <View style={styles.iconBlog}>
                        <Foundation name="heart" size={24} color="tomato" style={styles.iconHeart}/>
                    </View>
                    <View style={styles.imgBlog}>
                        <Image source={require('../../assets/images/flower1.png')} style={styles.img}/>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Dragon Plant</Text>
                        <View style={styles.costBlog}>
                            <Text style={styles.textStyle}>$25.99</Text>
                            <MaterialIcons name="add" size={24} color="#FFF" style={styles.iconAdd} />
                        </View>
                    </View>
                </View>
                <View style={styles.blog}>
                    <View style={styles.iconBlog}>
                        <Foundation name="heart" size={24} color="tomato" style={styles.iconHeart}/>
                    </View>
                    <View style={styles.imgBlog}>
                        <Image source={require('../../assets/images/flower1.png')} style={styles.img}/>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Dragon Plant</Text>
                        <View style={styles.costBlog}>
                            <Text style={styles.textStyle}>$25.99</Text>
                            <MaterialIcons name="add" size={24} color="#FFF" style={styles.iconAdd} />
                        </View>
                    </View>
                </View>
                <View style={styles.blog}>
                    <View style={styles.iconBlog}>
                        <Foundation name="heart" size={24} color="tomato" style={styles.iconHeart}/>
                    </View>
                    <View style={styles.imgBlog}>
                        <Image source={require('../../assets/images/flower1.png')} style={styles.img}/>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Dragon Plant</Text>
                        <View style={styles.costBlog}>
                            <Text style={styles.textStyle}>$25.99</Text>
                            <MaterialIcons name="add" size={24} color="#FFF" style={styles.iconAdd} />
                        </View>
                    </View>
                </View>
                <View style={styles.blog}>
                    <View style={styles.iconBlog}>
                        <Foundation name="heart" size={24} color="tomato" style={styles.iconHeart}/>
                    </View>
                    <View style={styles.imgBlog}>
                        <Image source={require('../../assets/images/flower1.png')} style={styles.img}/>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Dragon Plant</Text>
                        <View style={styles.costBlog}>
                            <Text style={styles.textStyle}>$25.99</Text>
                            <MaterialIcons name="add" size={24} color="#FFF" style={styles.iconAdd} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gray,
        paddingVertical: 10,
    },
    blogSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    iconHeart: {
        backgroundColor: '#F2CDC8',
        width: 35,
        height: 35,
        paddingTop: 6.5,
        paddingLeft: 8,
        borderRadius: 35,
    },
    iconAdd: {
        backgroundColor: colors.green,
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 5,
    }
});