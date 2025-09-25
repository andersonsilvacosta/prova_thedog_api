import './style.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main>
            <h1>Minha api dos DOGS</h1>
            <p>Meu primeiro projeto React , trabalhando com importação de componentes</p>
          <Link to="/">Voltar para a Home</Link>
            
        </main>
    );
}

export default Home;