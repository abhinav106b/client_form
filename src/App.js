import React,{Component} from 'react';
import './App.css';
import Main from './components/main_component';



class App extends Component {
  render() {
    return (
        <div className="App bkg_img">
          <Main />
        </div>
    );
  }
}


export default App;