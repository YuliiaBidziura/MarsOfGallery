import React from 'react';
import logoMars from '../img/1r.png';
import { observer } from "mobx-react-lite";
import '../App.css'
const NavBar = observer(() => {

    return (
                <div className="container-fluid" style={{backgroundColor: 'black'}}>
                    <div className="navbar-brand d-flex" >
                        <img src={logoMars} alt="logo" width="80" height="50" className="d-inline-block align-text-top" />
                        <p style={{marginTop: 10, color: 'white'}}>Welcome to Mars!</p>
                    </div>
                </div>
    );
});

export default NavBar;
