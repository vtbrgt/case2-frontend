import React from 'react';
import { Api } from '../api/Api';
import CardGroup from 'react-bootstrap/CardGroup';
import Loading from '../components/Loading';
import Funcionario from '../components/Funcionarios';
import './Sobre.css';

const Sobre = () => {
  const [funcionarios, setFuncionarios] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getFuncionarios() {
    try {
      const { data } = await Api.get('/funcionarios');
      setFuncionarios(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  React.useEffect(() => {
    getFuncionarios();
  });

  return (
    <div className="body">
      <div className="equipe">
        <h1>Nossa equipe</h1>
        <CardGroup>
          {funcionarios &&
            funcionarios.map((funcionario) => (
              <Funcionario
                nome={funcionario.nome}
                sobrenome={funcionario.sobrenome}
                cargo={funcionario.cargo}
                key={funcionario.id}
              />
            ))}
        </CardGroup>
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Sobre;
