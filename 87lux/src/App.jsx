import React from 'react'; 
import Header from './Header';
import About from './About';
import Career from './Career';
import Contact from './Contact'

class App extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { 
          view: { name: "home"}
        
        } 

        this.setView = this.setView.bind(this);
    }  

    setView(name) { 
        this.setState({ 
            view: { name: name}
        });
    }


    render (){ 

        if (this.state.view.name === 'about'){ 
            return ( 
                <>
                < Header setView={ this.setView} />
                < About />
                </>
            );
        }
        else if ( this.state.view.name === 'home'){ 
            return ( 
                <>
                < Header setView={ this.setView} />
                
                </>
            );
        } 
        else if ( this.state.view.name === 'career'){ 
            return ( 
                <>
                < Header setView={ this.setView} />
                < Career />
                </>
            );
        }
        else if ( this.state.view.name === 'contact'){ 
            return ( 
                <>
                < Header setView={ this.setView} />
                < Contact />
                </>
            );
        }
    }
}

export default App;