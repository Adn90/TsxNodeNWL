import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'; // ajusta botões retangulares ao padrão do OS
import api from '../../services/api';

import styles from './styles';

import landinImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';




function Landing() {
    const { navigate } = useNavigation();
    // 0 para inicializar por causa do tempo de requisição; Poderia ter uma tela de loading enquanto terminar o await
    const [totalConnections, setTotalConnections] = useState(0);

    // serve para lançar uma requisição, como mostar o nº de requisições ao entrar na landing page
    // params:(() => {}, []*) array de dependências*: é quando se quer disparar o 1ª param(a função) do useEffect. Quando um dado desse array é modificado, a função é disparada
    // o array vazio []* pode ser usado para disparar a func apenas uma vez ao acessar a tela
    useEffect(() => {
        api.get('connections').then(response => {
            //console.log(response);
            const { total } = response.data // == const total = response.data.total
            setTotalConnections(total);
        })
    }, []); 

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses'); // att nome do componente <Screen name="GiveClasses" />
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }


    // view == div, main, header, footer, section
    return (
        <View style={styles.container}>

            <Image source={landinImg} style={styles.banner} />

            {/*Text é o único elemento que tem herança de estilos*/}
            <Text style={styles.title}>
                Seja Bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]} 
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} Conexões já Realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    );
}

export default Landing