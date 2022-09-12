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

    const [valor, setValor] = useState("_");
    const [valoresCuadrados, setValoresCuadrados] = useState(Array(9).fill("_"));

    const cambiarValor = () => {        
        setValor("X");
        console.log("clic");
    };

    return(<>        
       
        <Row xs="auto">            
        <Cuadrado manejarClick={cambiarValor} valor={valor}/>
        <Cuadrado valor={valoresCuadrados[1]}/>
        <Cuadrado valor={valoresCuadrados[2]}/>
        </Row>
        <Row xs="auto">
        <Cuadrado valor={valoresCuadrados[3]}/>
        <Cuadrado valor={valoresCuadrados[4]}/>
        <Cuadrado valor={valoresCuadrados[5]}/>
        </Row>
        <Row xs="auto">
        <Cuadrado valor={valoresCuadrados[6]}/>
        <Cuadrado valor={valoresCuadrados[7]}/>
        <Cuadrado valor={valoresCuadrados[8]}/>
        </Row>
    </>)
    
}
export default Tablero;
