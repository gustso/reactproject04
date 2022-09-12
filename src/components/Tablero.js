import Cuadrado from './Cuadrado';
import { Container, Row } from 'react-bootstrap';

/**
import React from "react";

class Tablero extends React.Component{
renderCuadrado(i) {
    return  <Cuadrado {i}/>;
}
 */

function Tablero() {
    return(<>    
        <Row xs="auto">
            <Cuadrado valor="1"/>
            <Cuadrado valor="2"/>
            <Cuadrado valor="3"/>
        </Row>
        <Row xs="auto">
            <Cuadrado valor="4"/>
            <Cuadrado valor="5"/>
            <Cuadrado valor="6"/>
        </Row>
        <Row xs="auto">
            <Cuadrado valor="7"/>
            <Cuadrado valor="8"/>
            <Cuadrado valor="9"/>
        </Row>
    </>)
    
}
export default Tablero;
