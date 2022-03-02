

import React, { createContext,Component } from 'react'


export const ThemeContext = createContext ();
  class ThemeContextProvider extends Component {
    
    state = {
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


      toogleTheme = () => {
        this.setState({ isBlueTheme: !this.state.isBlueTheme })
      }

    render(){
        return (
            <ThemeContext.Provider value = {{...this.state, toogleTheme: this.toogleTheme}}>
                {this.props.children}
                </ThemeContext.Provider>
        )
    }
  }
  export default ThemeContextProvider;