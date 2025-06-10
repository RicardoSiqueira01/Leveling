import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setMensagem(response.data.mensagem);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div>
      <h1>Projeto React com Backend</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;