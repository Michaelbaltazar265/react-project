
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import First from './First'; 
import Sec from './Sec';
import Button from './Button';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App()
{
    return(<Router>
        <div>
        <Nav/> 
        <Switch>
           <Route path='/' exact component={Home}/> 
           <Route path='/abt' component={About}/>
           <Route path='/con' component={Contact}/>
           <Route path='/first' component={First}/>
           <Route path='/sec' component={Sec}/>
        </Switch> 
        </div> 
        <div>
            <Switch> 
            <Route path='./button' component={Button}/>
            </Switch>
                    
            
        </div>
    </Router>)
}

export default App;



//npm install react-router-dom