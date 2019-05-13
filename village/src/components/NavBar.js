import React from 'react';
import { Link } from 'react-router-dom';
import './compstyles.css';


function NavBar() {
    return (
        <div>
            <ul className="nav">
                <li>
                    <Link to="/">Smurfs</Link>
                </li>
                <li>
                    <Link to="/smurf-form">Add Smurf</Link>
                </li>
            </ul>
        </div> 
    );
}

export default NavBar;