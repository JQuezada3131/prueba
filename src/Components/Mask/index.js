/*
    *El componente Mask debe abrirse desde un componente externo
    *Debe renderizarse en el body del html
    *Debe ser obligatorio que se defina la prop "size", puede recibir las props adicionales que sean necesarias
    *El contenedor Mask puede mostrar cualquier contenido que se le pase como hijo
*/
import React from 'react'

const Mask = props => {

    if (!props.isOpen) {
        return null
    }

    return (
        <div style={styles.container}>
            {props.size === 'l' ? (
                <div style={styles.size.l}>{props.children}</div>
            ) : (
                <div style={styles.size.s}>{props.children}</div>
            )}
        </div>
    )
}

const styles = {
    size: {
        s: {
            width: '70vw',
            height: '60vh'
        },
        l: {
            width: '90vw',
            height: '80vh'
        },
    },
    container: {
        margin: 'auto',
        top: 0,
        left: 0,
        background: '#000000aa'
    }
}

export default Mask