import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
    const [favorites, setFavorites] = useState([]);
    
    function loadFavorites() {
        // AsyncStorage não é um tipo de BD relacional, ele só salva texto
        AsyncStorage.getItem('favorites').then(response => {
            if (response) { // vai voltar como texto
               const favoritedTeachers = JSON.parse(response);
               
               setFavorites(favoritedTeachers);
            }  
        });
    }

    // sempre vai ser carregado quando a tela entrar em foco
    useFocusEffect(() => {
        loadFavorites()
    });

    return ( 
        <View style={styles.container} >
            <PageHeader title="Meus proffys favoritos" />

            {/* contentContainerStyle essa prop é melhor do que aplicar padding no styles** */}
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    // o padding só é aplicado no scroll e não no container em si
                    paddingHorizontal: 16, //prop do react-native
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited // == favorited={true}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;