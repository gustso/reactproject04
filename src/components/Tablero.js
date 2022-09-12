import Cuadrado from './Cuadrado';
import { Container, Row } from 'react-bootstrap';
import { useState } from "react";

/**
import React from "react";

class Tablero extends React.Component{
renderCuadrado(i) {
    return  <Cuadrado {i}/>;
}
 */

function Tablero() {
    
    const [valoresCuadrados, setValoresCuadrados] = useState(Array(9).fill("_"));
    const [siguienteX, setSiguienteX] = useState(true);
    const [valor, setValor] = useState("X");

    const cambiarValor = (i) => {        
        setValor("X");
        console.log("clic "+i);
        if (siguienteX) {
            setSiguienteX(false);
            setValor("O");
            setValoresCuadrados([
                ...valoresCuadrados.slice(0,i),
                "X",
                ...valoresCuadrados.slice(i+1, valoresCuadrados.length)])
        } else {
            setSiguienteX(true);
            setValor("X");
            setValoresCuadrados([
                ...valoresCuadrados.slice(0,i),
                "O",
                ...valoresCuadrados.slice(i+1, valoresCuadrados.length)])
        }
    };

    return(<>        
       <h1 className="display-1">Hola! Juega: {valor} </h1>        
        <Row xs="auto">            
        <Cuadrado manejarClick={(i) => cambiarValor(0)} valor={valoresCuadrados[0]}/>
        <Cuadrado manejarClick={(i) => cambiarValor(1)} valor={valoresCuadrados[1]}/>
        <Cuadrado manejarClick={(i) => cambiarValor(2)} valor={valoresCuadrados[2]}/>
        </Row>
        <Row xs="auto">
        <Cuadrado manejarClick={(i) => cambiarValor(3)} valor={valoresCuadrados[3]}/>
        <Cuadrado manejarClick={(i) => cambiarValor(4)} valor={valoresCuadrados[4]}/>
        <Cuadrado manejarClick={(i) => cambiarValor(5)} valor={valoresCuadrados[5]}/>
        </Row>
        <Row xs="auto">
        <Cuadrado manejarClick={(i) => cambiarValor(6)} valor={valoresCuadrados[6]}/>
        <Cuadrado manejarClick={(i) => cambiarValor(7)} valor={valoresCuadrados[7]}/>
        <Cuadrado manejarClick={(i) => cambiarValor(8)} valor={valoresCuadrados[8]}/>
        </Row>
    </>)
    
}
export default Tablero;
