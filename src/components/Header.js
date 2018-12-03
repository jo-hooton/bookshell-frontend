import React from 'react'

import Button from '@material-ui/core/Button'
import logo from '../images/bookshell-logo.png';

const Header = props =>
        <header className="app-header">
            <div>
            <div id='logo'>
             <img src={logo} className="app-logo" alt="logo" />
             <h3 className='logo-text'>Bookshell</h3>
            </div>
             {
            
               props.username ?
                <h6>{`Signed in as ${props.username}`}</h6>:
                <>
                <div className='nav' >
                <Button label='Log in' color='primary' onClick={props.loginRoute}>LOG IN</Button>
                <Button label='Sign Up' color='primary' onClick={props.signUpRoute}>SIGN UP</Button>
                </div>
                </>
            
             }
             
             {
                props.username &&
                <>
                <div className='nav' >
                <Button onClick={props.createBooklet}>CREATE</Button>
                <Button onClick={props.myBooklets}>MY BOOKLETS</Button>
                <Button onClick={props.logout}>LOG OUT</Button>
                </div>
                </>
             }
            
            </div>
       </header>

export default Header