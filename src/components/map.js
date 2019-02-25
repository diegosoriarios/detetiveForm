import React, { Component } from 'react'

const lugares = [
    {
        nome: "Cemitério",
        distancias: [
            [["Cemitério"]],
            [["Cemitério", "Hospital"]],
            [["Cemitério", "Hospital", "Hotel"]],
            [["Cemitério", "Hospital", "Hotel", "Floricultura"]],
            [["Cemitério", "Hospital", "Hotel", "Floricultura", "Prefeitura"]],
            [["Cemitério", "Hospital", "Hotel", "Floricultura", "Prefeitura", "Mansão"]]
        ]
    },
    {
        nome: "Mansão",
        distancias: [
            [["Mansão"]],
            [["Mansão", "Floricultura"]],
            [["Mansão", "Floricultura", "Hotel"]],
            [["Mansão", "Floricultura", "Hotel", "Hospital"]],
            [["Mansão", "Floricultura", "Hotel", "Hospital", "Cemitério"]],
            [["Mansão", "Floricultura", "Hotel", "Hospital", "Cemitério", "Prefeitura"]]
        ]
    },
    {
        nome: "Prefeitura",
        distancias: [
            [["Prefeitura"]],
            [["Prefeitura", "Cemitério"]],
            [["Prefeitura", "Cemitério", "Hospital"]],
            [["Prefeitura", "Cemitério", "Hospital", "Hotel"]],
            [["Prefeitura", "Cemitério", "Hospital", "Hotel", "Mansão"]],
            [["Prefeitura", "Cemitério", "Hospital", "Hotel", "Mansão", "Floricultura"]],
        ]
    },
    {
        nome: "Hotel",
        distancias: [
            [["Hotel"]],
            [["Hotel", "Floricultura"]],
            [["Hotel", "Floricultura", "Hospital"]],
            [["Hotel", "Floricultura", "Hospital", "Prefeitura"]],
            [["Hotel", "Floricultura", "Hospital", "Prefeitura", "Cemitério"]],
            [["Hotel", "Floricultura", "Hospital", "Prefeitura", "Cemitério", "Mansão"]],
        ]
    },
    {
        nome: "Hospital",
        distancias: [
            [["Hospital"]],
            [["Hospital", "Floricultura"]],
            [["Hospital", "Floricultura", "Cemitério"]],
            [["Hospital", "Floricultura", "Cemitério", "Hotel"]],
            [["Hospital", "Floricultura", "Cemitério", "Hotel", "Mansão"]],
            [["Hospital", "Floricultura", "Cemitério", "Hotel", "Mansão", "Prefeitura"]],
        ]
    },
    {
        nome: "Floricultura",
        distancias: [
            [["Floricultura"]],
            [["Floricultura", "Hospital"]],
            [["Floricultura", "Hospital", "Prefeitura"]],
            [["Floricultura", "Hospital", "Prefeitura", "Cemitério"]],
            [["Floricultura", "Hospital", "Prefeitura", "Cemitério", "Hotel"]],
            [["Floricultura", "Hospital", "Prefeitura", "Cemitério", "Hotel", "Mansão"]],
        ]
    },
]

class Map extends Component {
    handlerChange = i => {
        console.log(i)
        this.props.change(i)
    }

    renderMap = index => {
        let lugar = lugares[index]
        return lugar.distancias[this.props.lugar].map((nome, i) => {
            return (
                <div key={i} onClick={() => this.handlerChange(i)}>{`${nome} + ${i}`}</div>
            );
        })
    }

    renderDado = () => {
        switch(this.props.lugar){
            case 1:
                return '⚀'
            case 2:
                return '⚁'
            case 3:
                return '⚂'
            case 4:
                return '⚃'
            case 5:
                return '⚄'
            case 6:
                return '⚅'
            default:
                return this.props.lugar
        }
    }

    render() {
        return(
            <div>
                <h2 className="dado">{this.renderDado()}</h2>
                {//<div>{this.renderMap(this.props.pos)}</div>
                }
            </div>
        );
    }
}

export default Map