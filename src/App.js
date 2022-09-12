import { Container, Row } from 'react-bootstrap';
import Cuadrado from './components/Cuadrado';

function App() {
    return (
        <Container>        
            <h1 className="display-1">HOLA</h1>        
            <Row  xs="auto">        
            <Cuadrado/>
            <Cuadrado/>
            <Cuadrado/>
            </Row>        
            <Row  xs="auto">        
            <Cuadrado/>
            <Cuadrado/>
            <Cuadrado/>
            </Row>        
            <Row  xs="auto">        
            <Cuadrado/>
            <Cuadrado/>
            <Cuadrado/>
            </Row>        
        </Container>
    );
  }
  
  export default App;
  