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
				<span>{nome}</span>
				<select>
					<option value="placeholder" disabled selected></option>
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
					<option value="placeholder" disabled selected></option>
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
					<option value="placeholder" disabled selected></option>
					<option value="inocente">Está limpa</option>
					<option value="culpado">Foi essa</option>
					<option value="suspeito">Ainda é suspeita</option>
				</select>
			</div>
		))}
	</div>
);

export default Home;