import Button from 'react-bootstrap/Button';

function Cuadrado ({valor, manejarClick}) {
    return (
        <Button variant="outline-secondary" onClick={manejarClick}>{valor}</Button>        
    );
}
export default Cuadrado;