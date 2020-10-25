import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Similar ao BrowserRouters da versão Web
import { createStackNavigator } from '@react-navigation/stack'; // cria um header para indicar a página no padrão do OS (appBar)

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const { Navigator, Screen} = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            {/* headerShown: false  tira o appBar que vem como padrão da navagação de pilha */}
            <Navigator screenOptions={{ headerShown: false }}> 
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;