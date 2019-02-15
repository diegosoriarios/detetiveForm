import React, { Component } from 'react';
import Home from './components/home';
import './App.css';
import Modal from 'react-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faTimes)

library.add()

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
		transform             : 'translate(-50%, -50%)',
		width									:	'50%',
		height								:	'10%',
		textAlign							: 'center',
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
		let random = Math.floor(Math.random() * 6 + 1)
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
          <h2 id="left"><FontAwesomeIcon icon="search" />&nbsp;&nbsp;Detetive</h2>
          <h4 id="right" onClick={() => this.jogarDado()}>Dado</h4>
        </div>
        <Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
					>
					<div id="modalStyle">
						<FontAwesomeIcon id="right" icon="times" onClick={() => this.setState({modalIsOpen: false})}/>
						<h1>{lugares[this.state.number - 1]}</h1>
					</div>
				</Modal>
        <Home />
      </div>
    );
  }
}

export default App;
