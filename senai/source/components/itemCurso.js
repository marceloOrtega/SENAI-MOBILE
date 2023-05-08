import { View, StyleSheet, Text } from "react-native";


export default function ItemLista({ item }) {
    return (
        <View style={styles.item}>
                <Text style={styles.nome}>{item.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        padding: 5,
        backgroundColor: '#a9a9a9',
        borderBottomWidth: 2,
        borderRadius: '10px'
    },
    nome: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 8,
    },
});