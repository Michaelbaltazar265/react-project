import React from "react";
import FlipNumbers from "react-flip-numbers";

class ComingSoon extends React.Component {
    state = {
      timeRemaining: 10000
    };
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1
        });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
    render() {
      return (
        <div className="container">
          <div className="App-intro">
              <h1 className='text-center'> Comming Soon</h1>
            <FlipNumbers
              play
              width={50}
              height={50}
              numbers={`${this.state.timeRemaining}`}
            />
            <h1 className='text-center'>Minutes</h1>
          </div>
        </div>
      );
    }
  }

export default ComingSoon;
