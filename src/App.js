import './App.css';
import DisplayGrid from './displaygrid';
import DisplayScoreBoard from './displayscores';
import Player from './player'; 
import { useReducer, useEffect, useCallback } from 'react';


function App() {
    const squares = [];
    const width = 10;
    const height = 20;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let newSquare = [i, j];
            squares.push(newSquare);
        }
    }

    var currentHorizontalPosition = 0;
    var currentVerticalPosition = 0; 
    const startMoving = setInterval(moveSnake, 100);
    function moveSnake() {
        document.querySelector(".snake").style.left = 0; 
        document.querySelector(".snake").style.top = 0; 
        if (currentHorizontalPosition < 1000) {
            let newPos = currentHorizontalPosition + 'px';
            document.querySelector(".snake").style.left = newPos;
            currentHorizontalPosition = currentHorizontalPosition + 10;
        } else {
            clearInterval(startMoving); 
        }
    }
    const handler = useCallback(
        (value) => {
            switch (value.key) {
                case 'ArrowUp':
                    console.log("up");
                    return;
                case 'ArrowDown':
                    //change direction with useReducer
                   
                    console.log("down");
                    return;
                case 'ArrowLeft':
                    console.log("left");
                    return;
                case 'ArrowRight':
                    
                    console.log("right");
                    return;
                default:
                    console.log(value.key);
                    return;
            }
        }, []);

    useEffect(() => {
        document.addEventListener('keydown', handler);
        return () => {
            document.removeEventListener('keydown', handler);
        }
    }, []);

    return (
        <div className="grid">
            {squares.map(square => (<div className="space"></div>))}
            <div className="snake"></div>
        </div>

        

    );
}

export default App;
