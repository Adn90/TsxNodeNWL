import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'; // useFonts é preciso importar em pelo menos 1 para fazer o carregamento 
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />; // tela de loading enquanto carregar as fontes
  } else {
    return (
      /*<> é um 'fragment'. Em react, não se pode retornar de dentro de um componentes, dois elementos sem nada em volta, 
        <> basicamente faz esse trabalho, mas sem add um elemento visual na tela, como <View /> por exemplo*/
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}

/*
// StyleSheet classe do react-native para style like CSS
// Não tem herança de estilo. Então caso o texto precise ser estilizado, é preciso criar novo objeto e prop style add a tag
// react-native vem com display flex como padrão e o flexDirection vem como column, != do web que é row
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold'
  }
});
*/