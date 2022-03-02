import Articlelist from './components/Articlelist';
import Toolbar from './ThemedButton'
import React,  { useContext, useState} from 'react';
import ThemeContext from './contexts/theme-context';
import ThemedButton from './ThemedButton'
import {Context} from './contexts/context'
import ArticleContainer from './components/ArticleContainer';

function App() {

const Theme = {
  isBlueTheme: false,
        blue: 
        {
            color: 'white',
            backgroundColor: '#83b3ff',
        },
        purple:
        {
            color: 'white',
            backgroundColor: '#b976ca'
        }
      }

const [theme, setTheme] = useState(Theme);

  return (
    <Context.Provider value={[theme, setTheme]}>
      <Toolbar/>
      <Articlelist/>
    </Context.Provider>
  );
  }

export default App;
