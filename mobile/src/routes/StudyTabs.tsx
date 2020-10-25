import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
	return (
		/* NavigatorContainer não é necessário, pois essa rota será chamada dentro da stack, que já tem esse elemento
	   NavigatorContainer só é necessário estar presente um vez; na root dos componentes*/
		<Navigator
			tabBarOptions={{ 
				style: {
					elevation: 0, // propriedade que controla sombra no Android
					shadowOpacity: 0, // propriedade que controla sombra no IOs
					height: 64,
				},
				tabStyle: {
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				},
				iconStyle: {
					flex: 0,
					width: 20,
					height: 20,
				},
				labelStyle: {
					fontFamily: 'Archivo_700Bold',
					fontSize: 13,
					marginLeft: 16,
				},
				inactiveBackgroundColor: '#fafafc', // para da aba não selecionada
				activeBackgroundColor: '#ebebf5',
				inactiveTintColor: '#c1bccc',
				activeTintColor: '#32264d'
				
			 }}
		>
			<Screen 
				name="TeacherList" 
				component={TeacherList}
				options={{ 
					tabBarLabel: 'Proffys', // troca o texto que veio ao setar o name
					tabBarIcon: ({ color, size, focused }) => { //focused verifica se está selecionado, color e size devem ser de acordo com as configs da aba(?)
						return (
							<Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
						);
					}
				 }} 
			/>
			<Screen 
				name="Favorites" 
				component={Favorites}
				options={{ 
					tabBarLabel: 'Favoritos', // troca o texto que veio ao setar o name
					tabBarIcon: ({ color, size, focused }) => {
						return (
							<Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
						);
					}
				 }}  
			/>
		</Navigator>
	);

}

export default StudyTabs;