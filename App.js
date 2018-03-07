import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

 constructor(props) {
    super(props);
    this.state = {clickYes: false,clickNo: false};
  }
  
handleClickOui(){
    
    this.setState({ clickYes: true })


}
handleClickNon(){
     this.setState({ clickNo: true })
}


  renderForm(){

     return (

      <div>
                          <p className="App-intro">
            Aimez-vous Javascript ?
          </p>
                          <label >
                            Oui
                            <input onClick={this.handleClickOui.bind(this)} type="radio" value="oui"   />
                          </label>
                          <label >
                            Non
                            <input onClick={this.handleClickNon.bind(this)} type="radio" value="non"   />
                          </label>
                          
                          
      </div>

      );
  }
  renderOui(){
    return (
      <div>

                         <p className="App-intro">
            Bon choix!
          </p>
                          
                          
      </div>

      );
  }
  renderNon(){
    return (
      <div>

                         <p className="App-intro">
            Zut!
          </p>
                          
                          
      </div>

      );
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Question/Réponse</h1>
        </header>
        <div > 
          
            
           { (this.state.clickYes===false&this.state.clickNo===false)?this.renderForm()  :(this.state.clickYes===true&this.state.clickNo===false)?this.renderOui():this.renderNon()  }
  
       </div>

      </div>


    );
  }



}


export default App;

