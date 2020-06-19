import React from 'react';

import theme from './Style/Theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header/header.component';


function App() {
  return (
    <ThemeProvider theme={theme}> 
            <div >
                  <Header />
            </div>
    </ThemeProvider> 
  );
}

export default App;
