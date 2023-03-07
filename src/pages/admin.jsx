import { FormSelect } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Api } from '../api/Api';
// import axios from "axios";

const Admin = () => {
 
  const [apiResponse, setApiresponse] = useState([]);
   
  const handleSelectChange = async (event) => {
    const selectedValue = event.target.value;
    const selectedValueRot = event.target.value;
     await Api.get(`/${selectedValue}`)
      .then(response => {
        setApiresponse(response.data);
        // console.log(response.data)
        
      })
      .catch(error => {
        console.log(error);
      })};
      const resp = apiResponse
  console.log(resp)
//  https://www.youtube.com/watch?v=XfODKuftA6Q
  return (
  <div>
    <select value={"selectValue"} onChange={handleSelectChange}>
      <option value="">Selecione uma opção</option>
      <option value="entradas">Entradas</option>
      <option value="funcionarios">Funcionarios</option>
      <option value="sobremesas">Sobremesas</option>
      <option value="clientes">Clirntes</option>
      <option value="principal">Prato principal</option>
    </select><br />
    <select value={"selectValueRot"} onChange={handleSelectChange}>
    <option value="">Selecione uma opção</option>
    <option value="post">Adicionar</option>
    <option value="put">Atualizar</option>
    <option value="delete">Deletar</option>
    </select>

  </div>
);

     
     
      {/* <select id="opcao">
        <option value="/entradas"> Entradas </option>
        <option value="/sobremesas">Sobremesas  </option>
        <option value="/principal"> Prato principal </option>
        <option value="/Funcionario"> Funcionarios </option>
        <option value="/cliente"> Clientes </option>
      </select>
      <form  >
        <input type="text"id="form" />
      </form> */}
    // </div>
  
}

export default Admin
