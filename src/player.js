import { squares } from './displaygrid.js';
import { useReducer, useEffect } from 'react';

const initialPosition = { col: 5, row: 5 };

function reducer(state, action) {
    switch (action.type) {
        case 'ArrowUp':
            return { col: state.col, row: state.row - 1 };
        case 'ArrowDown':
            return { col: state.col, row: state.row + 1 };
        case 'ArrowLeft':
            return { col: state.col - 1, row: state.row };
        case 'ArrowRight':
            return { col: state.col + 1, row: state.row };
        default:
            console.log("here lies my dream");
    }
}

export default function Player() {
	//listen for user input using useReducer
    const [state, dispatch] = useReducer(reducer, initialPosition);
    useEffect(() => {
        document.addEventListener('keyup', (value) => {
            console.log(value.key);
            dispatch({ type: value.key });
        });
    }, []);
    useEffect(() => {
        console.log(state.col, state.row);
        
    }, [state]);

	return;
}