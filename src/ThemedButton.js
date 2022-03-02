import ThemeContext from './contexts/theme-context';
import React, { useContext } from 'react';
import {Context} from './contexts/context'

function Toolbar(props) {
    const [theme, setTheme] = useContext(Context);
    return (
      <button onClick={() => setTheme({...theme, isBlueTheme: !theme.isBlueTheme})}>
        Change Theme
 </button>
    );
  }

  

export default Toolbar;