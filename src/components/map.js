import React, { Component } from 'react'

const tiles = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '0', '0', '0', '0', '0', '0', '0'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '0', '0', 'h', 'h', 'h', 'h', 'h'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', '0', '0', 'h', 'h', 'h', 'h', 'h'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'H', 'h', 'h', 'h', 'h'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'h', 'h', 'h', 'h', 'h'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', '0', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', '0', '0', '0', 'h', 'h', 'h', 'h', 'h'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', '0', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', '0', '0', '0', 'h', 'h', 'h', 'h', 'h'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', '0', '0', '0', 'h', 'h', 'H', 'h', 'h'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['f', 'f', 'f', 'F', 'f', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['f', 'f', 'f', 'f', 'f', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'C', 'c', 'c', 'c', '0', '0', '0', 'a', 'a', 'A', 'a', 'a'],
    ['f', 'f', 'f', 'f', 'f', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'C', '0', '0', '0', 'a', 'a', 'a', 'a', 'a'],
    ['f', 'f', 'f', 'f', 'f', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '0', '0', '0', 'a', 'a', 'a', 'a', 'a'],
    ['f', 'f', 'f', 'f', 'F', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '0', '0', '0', 'A', 'a', 'a', 'a', 'a'],
    ['f', 'f', 'f', 'f', 'f', '0', '0', '0', '0', 'C', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '0', '0', '0', 'a', 'a', 'a', 'a', 'a'],
    ['f', 'f', 'f', 'f', 'f', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '0', '0', '0', 'a', 'a', 'a', 'a', 'a'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '0', '0', '0', '0', '0', '0', '0', '0'],
]

class Map extends Component {
    handleChange = (i, j) => {
        console.log(i)
        console.log(j)
        this.props.change(i, j)
    }    

    renderTiles = () => {
        return tiles.map((pos, i) => {
            return pos.map((tile, j) => {
                let color
                switch (tile) {
                    case 'f':
                        color = 'blue'
                        break;
                    case 'p':
                        color = 'red'
                        break;
                    case 'm':
                        color = 'green'
                        break;
                    case 'n':
                        color = 'yellow'
                        break;
                    case 'a':
                        color = 'brown'
                        break;
                    case 'c':
                        color = 'pink'
                        break;
                    case 'h':
                        color = 'purple'
                        break;
                    default:
                        break;
                }
                let label 
                if(this.props.position[0] === i && this.props.position[1] === j){
                    //return <div style={{backgroundColor: color}}>X</div> 
                    label = 'X'
                }else{
                    label = 'z'
                }
                return (
                    <div 
                        style={{backgroundColor: color, color: label === 'z' ? 'transparent' : 'black'}}
                        onClick={() => this.handleChange(i, j)}
                    >{label}</div>
                );
            })
        })
    }

    render() {
        return(
            <div>
                <h1>{this.props.lugar}</h1>
                <div className="tableTile">{this.renderTiles()}</div>
                
                
            </div>
        );
    }
}

export default Map