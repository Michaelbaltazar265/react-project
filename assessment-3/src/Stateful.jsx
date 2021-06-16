import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            greeting: 'Hello!'
        };
    }
    // this works in a stateful component
    click(e) {
        this.setState({
              greeting: 'Hello World!'
        });
    }

    // this does not work 
    // click(e) {
    //     this.state = "Hello World"
    // }

    render() {
        return(
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.click}>setState</button>
            </div>
        );
    }
    
}

export default Greeting;