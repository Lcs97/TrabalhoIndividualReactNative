import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Opcao from '../components/Opcao/Opcao';
import Botao from '../components/Botao/Botao';
import styles from './Pagina.styles';

const Pagina = () => {
    const handlePress = () => {
        console.log('Botão pressionado!');
    };

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.statusbar} />
            <View style={styles.container1}>
                <Text style={styles.titulo}>Estou usando o Notion...</Text>
                <Text style={styles.frasePrincipal}>Adaptamos a configuração conforme sua opção.</Text>
            </View>
            <View style={styles.container2}>
                <Opcao
                    imageSource={require('../../assets/img1.png')}
                    titulo="Para minha equipe"
                    descricao="Colabore em seus documentos, projetos e wikis."
                />
                <Opcao
                    imageSource={require('../../assets/img2.png')}
                    titulo="Para uso pessoal"
                    descricao="Melhore a escrita. Pense com mais clareza. Mantenha tudo organizado."
                />
                <Opcao
                    imageSource={require('../../assets/img3.png')}
                    titulo="Para instituição de ensino"
                    descricao="Mantenha suas anotações, pesquisas e tarefas em um só lugar."
                />
            </View>
            <View style={styles.containerBotao}>
                <Botao onPress={handlePress} />
            </View>
        </View>
    );
};

export default Pagina;
