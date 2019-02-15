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
            <div className="pessoas" key={nome}>
				<label>Talvez 
					<input type="radio" name={nome} value="Talvez" />
				</label>
				<label>Sim
					<input type="radio" name={nome} value="Sim" />
				</label>
				<label>Não
					<input type="radio" name={nome} value="Nao" />
				</label>
				<span>{nome}</span>
			</div>
		))}
		<h2>Lugares</h2>
		{lugares.map(nome => (
			<div className="lugares" key={nome}>
				<label>Talvez 
					<input type="radio" name={nome} value="Talvez" />
				</label>
				<label>Sim
					<input type="radio" name={nome} value="Sim" />
				</label>
				<label>Não
					<input type="radio" name={nome} value="Nao" />
				</label>
				<span>{nome}</span>
			</div>
		))}
		<h2>Armas</h2>
		{arma.map(nome => (
			<div className="armas" key={nome}>
				<label>Talvez 
					<input type="radio" name={nome} value="Talvez" />
				</label>
				<label>Sim
					<input type="radio" name={nome} value="Sim" />
				</label>
				<label>Não
					<input type="radio" name={nome} value="Nao" />
				</label>
				<span>{nome}</span>
			</div>
		))}
	</div>
);

export default Home;