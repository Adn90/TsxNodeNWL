import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;