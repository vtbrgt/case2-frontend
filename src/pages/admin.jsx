import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Api } from '../api/Api';

const Admin = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [selectd, setSelectd] = useState('');
  const handleSelectChange = async (event) => {
        event.preventDefault()   
          
     
    if (nome && preco && descricao) {
      try {
        await Api.put(`/${selectd}`,{nome, preco, descricao})
        .then((result) => {
          console.log(result);
          
        })
        .catch(err => {
          console.log(err);
        })}
       finally {
        setNome('');
        setPreco('');
        setDescricao('');
      }
    } else {
      toast.warn('Complete todos os dados para cadastrar');
    }
    
  }

  return (
 <div>
   <Form onSubmit={handleSelectChange} > 
  <select value={"selectValue"} onChange={({ target }) => setSelectd(target.value) }>
      <option value="">Selecione uma opção</option>
      <option value="entradas">Entradas</option>
      <option value="funcionarios">Funcionarios</option>
      <option value="sobremesas">Sobremesas</option>
      <option value="clientes">Clientes</option>
      <option value="principal">Prato principal</option>
    </select>
    
    
      <Form.Group controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="preco">
        <Form.Label>Preço</Form.Label>
        <Form.Control
          type="text"
          value={preco}
          onChange={({ target }) => setPreco(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="descricao">
        <Form.Label>descrição</Form.Label>
        <Form.Control
          type="text"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="dark">
        Adicionar
      </Button>
    </Form>
    </div>
  )}
 
//   const [apiResponse, setApiresponse] = useState([]);

//   return (
//   <div>
//    <br />
//     <label >Nome</label>
//     <input id="nome" type="text"  placeholder='Nome'/>
//     <button onSubmit={handleSelectChange}>enviar</button>

//   </div>
// );

     
     
      // <select id="opcao">
      //   <option value="/entradas"> Entradas </option>
      //   <option value="/sobremesas">Sobremesas  </option>
      //   <option value="/principal"> Prato principal </option>
      //   <option value="/Funcionario"> Funcionarios </option>
      //   <option value="/cliente"> Clientes </option>
      // </select>
      // <form  >
      //   <input type="text"id="form" />
      // </form>
    // </div>
  
  

export default Admin
