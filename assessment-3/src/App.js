import logo from './logo.svg';
import './App.css';
import Greeting from './Stateful';
import Greeting2 from './Stateless';

function App() {
  return (
    <div className="App">
     <h1>Hello there</h1>
     < Greeting />
     <Greeting2 greeting="Hello"/>
    </div>
  );
}

export default App;
