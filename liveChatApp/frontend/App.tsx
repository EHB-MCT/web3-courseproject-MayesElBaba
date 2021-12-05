import React from 'react';
// om gebruik te maken van de paper libary
import { Provider as PaperProvider} from 'react-native-paper';
import { theme } from './App.style';
import AppNavigator from './src/app.navigator';


const App = () => {
  return (
 <PaperProvider theme={theme}>
   <AppNavigator />
 </PaperProvider>
  );
};

export default App;
