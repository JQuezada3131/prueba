/*
    El componente Counter es un contador de clics, aumenta en uno cuando se hace clic en el boton + 
        y disminuye uno cuando se clickea el boton -, el boton "reset" es para regresar el valor a 0

    *Realiza las funciones necesarias para hacer funcionar el componente como se describe
    *Crea un componente igual que el que se describe haciendo uso de Redux
    *Crea un componente igual que el que se describe haciendo uso de useReducer
    *Utiliza diferentes rutas para los tres componentes
*/

import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0);

    const incrementClick = () => setCount(count + 1);
    const decrementClick = () => setCount(count - 1);
    const resetBtn = () => setCount(0);

    return (
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter</h3>
            <button onClick={()=> incrementClick()}>+</button>
            <span style={styles.count}>{count}</span>
            <button onClick={()=> decrementClick()}>-</button>
            <button onClick={()=> resetBtn()} style={styles.resetButton}>Reset</button>
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

export default Counter;