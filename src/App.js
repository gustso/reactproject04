import { Container, Row } from 'react-bootstrap';
import Tablero from './components/Tablero';
import { Routes, Route, Link, Switch } from 'react-router-dom';


function App() {

    return (
        <><Container>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tablero">Tablero</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="tablero" element={<Tablero />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            
            <footer>Pie de pagina</footer>
            </Container>
        </>
    );
}

export default App;

function About() {
    return (
        <div>
            <h2>About Page</h2>
        </div>
    );
};

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    );
};

function ErrorPage() {
    return (
        <div>
            <h2>Error Page</h2>
        </div>
    );
};
