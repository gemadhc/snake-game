import './grid.css';
import { useState, useEffect, useReducer } from 'react';

export default function DisplayGrid() {

    const squares = [];
    const width = 10;
    const height = 10;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let newSquare = [i, j];
            squares.push(newSquare);
        }
    }

    return (
        <div className="grid">
            {squares.map(function (square) {
                if (square.column == 0 || square.row == 0 || square.column == 9 || square.row == 9 ) {
                    return (<div className="space-occupied"></div>);
                } else if (square.column == 5 && square.row == 3) {
                    return (<div id ="space-character"></div>); 
                }
                 else {
                    return (<div className="space"></div>);
                }
            })}
        </div>
    );
}