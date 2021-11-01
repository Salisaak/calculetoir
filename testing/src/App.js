import React, {Component} from 'react';
import './App.css';
import KeyPadComponent from './components/KeyPadComponent';
import ResultsComponent from './components/ResultsComponents';
class App extends Component {
  constructor(){
    super();
    this.state= {
      result: ''
    };
  }

  onClick = button => {
    console.log(button);
if(button==="="){
  this.calculate();
}
else if(button==="C"){
  this.reset();
}
else if(button==="CE"){
  this.backspace();
}
else {
  this.setState({
    result: this.state.result +button
  })
}
  };

calculate =() => {
  var checkResult = '';
  if(this.state.result.includes('--')){
    checkResult = this.state.result.replace('--','+')
  
  }
  else{
    checkResult = this.state.result
  }
  try{
    this.setState({
      result: (eval(checkResult) || '')+ ''
    })
  }catch (e) {
    this.setState({
      result: 'error'
    });
  }
};

reset = () => {
  this.setState({
    result:''
  });
}

backspace =() => {
  this.setState({
    result: this.state.result.slice(0,-1)
  });
};

  render(){
    return(
      <div>
        <div className = "calc-body">
          <h1>Calc</h1>
            <ResultsComponent result={this.state.result}/>
            <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
      
    
  }

}

export default App;
