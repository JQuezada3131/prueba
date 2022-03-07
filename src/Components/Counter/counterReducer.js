/*
    El componente Counter es un contador de clics, aumenta en uno cuando se hace clic en el boton + 
        y disminuye uno cuando se clickea el boton -, el boton "reset" es para regresar el valor a 0

    *Realiza las funciones necesarias para hacer funcionar el componente como se describe
    *Crea un componente igual que el que se describe haciendo uso de Redux
    *Crea un componente igual que el que se describe haciendo uso de useReducer
    *Utiliza diferentes rutas para los tres componentes
*/

import React from 'react'

const CounterReducer = () => {

    const [count, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        }
    }, 0);

    return (
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter reducer</h3>
            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            <span style={styles.count}>{count}</span>
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
            <button onClick={()=> dispatch({type: 'reset'})} style={styles.resetButton}>Reset</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: '0.25em'
    },
    resetButton: {
        gridColumnEnd: 'span 3'
    },
    count: {
        alignSelf: 'center',
        justifySelf: 'center'
    }
}

export default CounterReducer;