import React, { Component } from 'react';
import Home from './components/home';
import './App.css';
import Modal from 'react-modal'

const lugares = [
	"Cemitério",
	"Mansão",
	"Prefeitura",
	"Hotel",
	"Hospital",
	"Floricultura"
]

const customStyles = {
	content : {
	  top                   : '50%',
	  left                  : '50%',
	  right                 : 'auto',
	  bottom                : 'auto',
	  marginRight           : '-50%',
	  transform             : 'translate(-50%, -50%)'
	}
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false,
      number: 0
    }
    Modal.setAppElement("#root")
  }

  jogarDado = () => {
		let random = Math.floor(Math.random() * 6)	
		let value = this.state.number + random
		if(value > 6){
			value -= 6;
		}
		console.log(random)
		console.log(value)
		this.setState({modalIsOpen: true, number: value})
	}

  render() {
    return (
      <div className="App">
        <div id="navbar">
          <h2 id="left">Detetive</h2>
          <h4 id="right" onClick={() => this.jogarDado()}>Dado</h4>
        </div>
        <Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
					>
					<h1>{lugares[this.state.number]}</h1>
					<button id="btn-fechar" onClick={() => this.setState({modalIsOpen: false})}>Fechar</button>
				</Modal>
        <Home />
      </div>
    );
  }
}

export default App;
