import Button from 'react-bootstrap/Button';

function Cuadrado (props) {
    return (
        <Button variant="outline-secondary" >{props.valor}</Button>        
    );
}
export default Cuadrado;