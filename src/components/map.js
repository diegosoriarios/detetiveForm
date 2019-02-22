import React, { Component } from 'react'

const tiles = [
    [1, 1, 0, 0, 2, 2, 0, 0, 3, 3],
    [1, 1, 0, 0, 2, 2, 0, 0, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 5, 5, 0, 0, 6, 6],
    [4, 4, 0, 0, 5, 5, 0, 0, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 7, 0, 0, 8, 8, 0, 0, 9, 9],
    [7, 7, 0, 0, 8, 8, 0, 0, 9, 9],
]

class Map extends Component {
    renderTiles = () => {
        return tiles.map((pos, i) => {
            return pos.map((tile, j) => {
                let color
                switch (tile) {
                    case 1:
                        color = 'blue'
                        break;
                    case 2:
                        color = 'red'
                        break;
                    case 3:
                        color = 'green'
                        break;
                    case 4:
                        color = 'yellow'
                        break;
                    case 5:
                        color = 'brown'
                        break;
                    case 6:
                        color = 'orange'
                        break;
                    case 7:
                        color = 'pink'
                        break;
                    case 8:
                        color = 'grey'
                        break;
                    case 9:
                        color = 'purple'
                        break;
                    default:
                        break;
                }
                if(this.props.position[0] === i && this.props.position[1] === j){
                    return <div className="tile" style={{backgroundColor: color}}>X</div> 
                }
                return <div className="tile" style={{backgroundColor: color}}>&nbsp;</div>
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