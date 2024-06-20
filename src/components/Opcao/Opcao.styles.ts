import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    opcao: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        height: 115,
        borderRadius: 7,
        backgroundColor: '#BDBDBD',
        marginBottom: 10,
    },
    imagens: {
        height: 100,
        width: 93,
        marginLeft: 3,
    },
    textoOpcao: {
        flex: 0.7,
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 5,
        flexGrow: 1.3
    },
    textoDescricao: {
        flex: 2,
        fontSize: 15,
        color: '#555',
        marginLeft: 15,
        marginBottom: 20
    },
    textoContainer: {
        width: 222,
        marginTop: 3
    },
    falseButton: {
        height: 30,
        width: 30,
        marginLeft: 7,
        marginTop: 2
    },
});

export default styles;
