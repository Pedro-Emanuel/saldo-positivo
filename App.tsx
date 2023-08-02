import { ActivityIndicator, StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

import { ThemeProvider } from 'styled-components/native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import theme from './src/theme/index';

export default function App() {
  const [fontsLoaded] =  useFonts({Poppins_400Regular, Poppins_700Bold});
  
  return (
    <ThemeProvider theme={theme}>
      
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Home/> : <ActivityIndicator/>}
      
    </ThemeProvider>
  );
}

