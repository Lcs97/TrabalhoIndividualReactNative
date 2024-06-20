import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../Opcao/Opcao.styles';

interface OpcaoProps {
    imageSource: ImageSourcePropType;
    titulo: string;
    descricao: string;
}

const Opcao: React.FC<OpcaoProps> = ({ imageSource, titulo, descricao }) => {
    return (
        <View style={styles.opcao}>
            <Image source={imageSource} style={styles.imagens} />
            <View style={styles.textoContainer}>
                <Text style={styles.textoOpcao}>{titulo}</Text>
                <Text style={styles.textoDescricao}>{descricao}</Text>
            </View>
            <Image source={require('../../../assets/falseButton.png')} style={styles.falseButton} />
        </View>
    );
};

export default Opcao;
