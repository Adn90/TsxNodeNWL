import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher    } from '../../components/TeacherItem';

import styles from './styles';


function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    async function handleFilterSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        console.log(response);
        setTeachers(response.data);
    }    

    return ( 
        <View style={styles.container} >
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name='filter' size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject.trim()} ///ver melhor solução
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual é a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            
            {/* contentContainerStyle essa prop é melhor do que aplicar padding no styles** */}
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    // o padding só é aplicado no scroll e não no container em si
                    paddingHorizontal: 16, //prop do react-native
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher)  => {
                   return <TeacherItem key={teacher.id} teacher={teacher} />
                })}                
            </ScrollView> 
        </View>
    );
}

export default TeacherList;