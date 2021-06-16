import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Nav()
{
    let linkstyle={
        color:'white',
        fontWeight:'bold'
    }   
    return(
    <>
    <nav>
        <h3>Sample E-Learning Website</h3>
        <ul className="nav1">
        <Link style={linkstyle} to='/abt'>
        <li>About</li>
        </Link>
        <Link style={linkstyle} to='/con'>
        <li>Contact</li>
        </Link>
        <Link style={linkstyle} to='/first'>
        <li>First</li>
        </Link>
        <Link style={linkstyle} to='/sec'>
        <li>Second</li>
        </Link>
        </ul>
    </nav>
   

<Link to='./button'> 
    <button>
        Press me 
    </button>
    </Link>

    
   </>
    )

}

export default Nav;
