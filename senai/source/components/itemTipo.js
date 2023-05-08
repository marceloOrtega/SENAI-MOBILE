import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

export default function ItemLista({ item }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemIMG}>
            <Image style={styles.img} source={item.background}/>
            </View>
            <View>
                <Text style={styles.sigla}>{item.sigla}</Text>
                <Text style={styles.nome}>{item.nome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: '#a9a9a9',
        borderBottomWidth: 2,
        borderRadius: '10px'
    },
    nome: {
        fontSize: 13,
        margin: 8,
    },
    sigla: {
        fontSize: 32,
        margin: 8,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: '10px'
    },
    itemIMG: {
        flex: 1,
        width: '50px',
        borderRightWidth: '3px', 
        borderColor: '#363636'
    }
});