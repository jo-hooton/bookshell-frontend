import React from 'react'

import Button from '@material-ui/core/Button'
import logo from '../images/bookshell-logo.png';

const Header = props =>
        <header className="App-header">
            <div>
             <img src={logo} className="App-logo" alt="logo" />
             <h3>
             {
            
               props.username ?
                `Welcome back, ${props.username}!`:
                <>
                <Button label='Log in' onClick={props.loginRoute}>LOG IN</Button>
                <Button onClick={props.signUpRoute}>SIGN UP</Button>
                </>
            
             }
             
             {
                props.username &&
                <>
                <Button onClick={props.createBooklet}>CREATE</Button>
                <Button onClick={props.logout}>LOG OUT</Button>
                </>
             }
             </h3>
            </div>
       </header>

export default Header