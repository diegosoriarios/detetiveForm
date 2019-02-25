import React, { Component } from 'react';
import '../App.css'


const pessoas = [
	"Coronel Mostarda",
	"Advogado",
	"Médica",
	"Florista",
	"Chefe de Cozinha",
	"Dançarina"
]

const lugares = [
	"Cemitério",
	"Mansão",
	"Prefeitura",
	"Hotel",
	"Hospital",
	"Floricultura"
]

const arma = [
	"Faca",
	"Soco Inglês",
	"Veneno",
	"Tesoura",
	"Espingarda"
]

class Home extends Component {
	state = {
		selected: []
	}

	handleSelect = (item) => {
		let check = this.state.selected.some(value => {
			return value === item
		})
		if(check){
			var newArray = this.state.selected
			for(var i = 0; i < this.state.selected.length; i++){
				if(this.state.selected[i] === item){
					newArray.splice(i, 1)
					this.setState({
						selected: newArray
					})
					break;
				}
			}
		}else{
			this.setState({
				selected: this.state.selected.concat(item)
			})
		}
	}

	renderList = item => {
		return item.map((nome, i) => {
			return (
				<li key={i} className={this.state.selected.some(value => {return value === nome}) ? 'normal' : 'slct'} onClick={() => this.handleSelect(nome)}>
					<span>{nome}</span>
				</li>
			);
		})
	}

	render(){
		return(
			<div className="home">
				<div>
					<ul className="pessoas">
						<p>Pessoas</p>
						{this.renderList(pessoas)}
					</ul>
				</div><br />
				<div>
					<ul className="lugares">
						<p>Lugares</p>
						{this.renderList(lugares)}
					</ul>
				</div><br />
				<div>
					<ul className="armas">
						<p>Armas</p>
						{this.renderList(arma)}
					</ul>
				</div>
			</div>
		);
	}
}

/*
const Home = () => (
	<div className="home">
		<h2>Pessoas</h2>
		{pessoas.map(nome => (
            <div className="pessoas" key={nome}>
				<span>{nome}</span>
				<select>
					<option value="placeholder" disabled defaultValue></option>
					<option value="inocente">É Inocente</option>
					<option value="culpado">É culpado</option>
					<option value="suspeito">Ainda é suspeito</option>
				</select>
			</div>
		))}
		<h2>Lugares</h2>
		{lugares.map(nome => (
			<div className="lugares" key={nome}>
				<span>{nome}</span>
				<select>
					<option value="placeholder" disabled defaultValue></option>
					<option value="inocente">Está limpo</option>
					<option value="culpado">Foi aqui</option>
					<option value="suspeito">Ainda é suspeito</option>
				</select>
			</div>
		))}
		<h2>Armas</h2>
		{arma.map(nome => (
			<div className="armas" key={nome}>
				<span>{nome}</span>
				<select>
					<option value="placeholder" disabled defaultValue></option>
					<option value="inocente">Está limpa</option>
					<option value="culpado">Foi essa</option>
					<option value="suspeito">Ainda é suspeita</option>
				</select>
			</div>
		))}
	</div>
);

*/
export default Home;