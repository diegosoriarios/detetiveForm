import React, { Component } from 'react';
import Home from './components/home';
import './App.css';
import Modal from 'react-modal'
import Map from './components/map';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faTimes)

library.add()
/*
const lugares = [
	"Cemitério",
	"Mansão",
	"Prefeitura",
	"Hotel",
	"Hospital",
	"Floricultura"
]*/

const customStyles = {
	content : {
	  top                   : '50%',
	  left                  : '50%',
	  right                 : 'auto',
	  bottom                : 'auto',
	  marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		width									:	'60%',
		height								:	'80%',
		textAlign							: 'center',
	}
};

window.onbeforeunload = function () {return false;}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false,
			number: 0,
			position: [5, 5]
    }
		Modal.setAppElement("#root")	
	}

  jogarDado = () => {
		let random = Math.floor(Math.random() * 100)
		random = random % 6
		let value = this.state.number + random
		if(value > 6){
			value -= 6;
		}
		console.log(random)
		console.log(value)
		this.setState({modalIsOpen: true, number: value})
	}

	changePosition = (x, y) => {
		this.setState({
			position: [x, y]
		})
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
						{//<Map lugar={lugares[this.state.number - 1]} />
						}
						<Map lugar={this.state.number} change={this.changePosition} position={this.state.position} />
					</div>
				</Modal>
        <Home />
      </div>
    );
  }
}

export default App;
