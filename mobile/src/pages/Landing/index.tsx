import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import landinImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
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
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                Total de X Conexões já Realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    );
}

export default Landing