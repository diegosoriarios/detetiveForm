import React from 'react';
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

const Home = () => (
	<div className="home">
		<h2>Pessoas</h2>
		{pessoas.map(nome => (
            <div id="pessoas" key={nome}><label>Talvez </label><input type="radio" name={nome} defaultChecked={true} /><label>Sim</label><input type="radio" name={nome} /><label>Não</label><input type="radio" name={nome} /> <span>{nome}</span></div>
		))}
		<h2>Lugares</h2>
		{lugares.map(nome => (
			<div id="lugares" key={nome}><label>Talvez </label><input type="radio" name={nome} defaultChecked={true} /><label>Sim</label><input type="radio" name={nome} /><label>Não</label><input type="radio" name={nome} /> <span>{nome}</span></div>
		))}
		<h2>Armas</h2>
		{arma.map(nome => (
			<div id="armas" key={nome}><label>Talvez </label><input type="radio" name={nome} defaultChecked={true} /><label>Sim</label><input type="radio" name={nome} /><label>Não</label><input type="radio" name={nome} /> <span>{nome}</span></div>
		))}
	</div>
);

export default Home;