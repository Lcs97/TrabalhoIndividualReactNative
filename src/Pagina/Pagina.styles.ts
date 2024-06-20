import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#202020',
    },
    statusbar: {
        flex: 0.09,
        backgroundColor: 'black',
    },
    container1: {
        flex: 0.4,
        justifyContent: 'center',
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 23,
        marginTop: 20,
    },
    frasePrincipal: {
        textAlign: 'center',
        color: '#838383',
        fontSize: 17,
        marginLeft: 17,
        marginRight: 17,
    },
    container2: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    containerBotao: {
        flex: 0.3,
        backgroundColor: '#202020',
        alignItems: 'center',
    },
});

export default styles;
