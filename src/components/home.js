import React, { Component } from 'react';
import '../App.css'


const pessoas = [
	{nome: "Coronel Mostarda", img: ''},
	{nome: "Advogado", img: ''},
	{nome: "Médica", img: ''},
	{nome: "Florista", img: ''},
	{nome: "Chefe de Cozinha", img: ''},
	{nome: "Dançarina", img: ''}
]

const lugares = [
	{nome: "Cemitério", img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/c7/4a/ff/padre-reus-cemiterio.jpg'},
	{nome: "Mansão", img: 'http://s2.glbimg.com/AUD_yBtATcWOC_MG46kR6vQT5_0=/smart/e.glbimg.com/og/ed/f/original/2017/09/19/floydmayweather_bh23.jpg'},
	{nome: "Prefeitura", img: 'http://www.pmpf.rs.gov.br/servicos/geral/multimidia/I2013-05-07_06:26:46_c8037.jpg'},
	{nome: "Hotel", img: 'https://www.ahstatic.com/photos/7205_ho_00_p_2048x1536.jpg'},
	{nome: "Hospital", img: 'https://www.healthline.com/hlcmsresource/images/imce/hospital-acquired-nosocomial-infections_thumb.jpg'},
	{nome: "Floricultura", img: 'https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/07/floricultura-furtos-atila-alberti3-w-825x550.jpg?a86372'}
]

const arma = [
	{nome: "Faca", img: ''},
	{nome: "Soco Inglês", img: ''},
	{nome: "Veneno", img: ''},
	{nome: "Tesoura", img: ''},
	{nome: "Espingarda", img: ''}
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
					<span>{nome.nome}</span>
					<img src={nome.img} alt={nome.nome} />
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