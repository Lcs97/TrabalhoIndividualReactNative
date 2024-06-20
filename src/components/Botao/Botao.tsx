import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import styles from './Botao.styles';

interface BotaoProps {
    onPress: (event: GestureResponderEvent) => void;
}

const Botao: React.FC<BotaoProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.textoBotao}>Continuar</Text>
        </TouchableOpacity>
    );
};

export default Botao;
