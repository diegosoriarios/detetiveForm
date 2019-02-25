import React, { Component } from 'react';
import '../App.css'
import florista from '../assets/florista.jpg'
import advogado from '../assets/advogado.jpg'
import coronel from '../assets/coronel.jpg'
import dancarina from '../assets/dancarina.png'
import tesouras from '../assets/tesouras.jpg'
import medica from '../assets/medica.png'


const pessoas = [
	{nome: "Coronel Mostarda", img: coronel},
	{nome: "Advogado", img: advogado},
	{nome: "Médica", img: medica},
	{nome: "Florista", img: florista},
	{nome: "Chefe de Cozinha", img: 'data:image/jpeg;base64,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'},
	{nome: "Dançarina", img: dancarina}
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
	{nome: "Faca", img: 'https://images.uncyc.org/pt/thumb/c/c9/Mestre_das_Facas.jpg/300px-Mestre_das_Facas.jpg'},
	{nome: "Soco Inglês", img: 'http://img.ibxk.com.br/ns/rexposta/2017/03/18/18130152183106.jpg?watermark=neaki&w=600'},
	{nome: "Veneno", img: 'https://i.ytimg.com/vi/uFvqQt078qY/hqdefault.jpg'},
	{nome: "Tesoura", img: tesouras},
	{nome: "Espingarda", img: 'http://pm1.narvii.com/6424/176cfb41fb7fc457fdd9b7b83dc41ee6dcf45bb6_hq.jpg'}
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
					<img src={nome.img} alt={nome.nome} />
					<span>{nome.nome}</span>
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

export default Home;