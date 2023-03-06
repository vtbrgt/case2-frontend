import React from 'react'
import { FormSelect } from 'react-bootstrap'
const Admin = () => {

const adm =() => {
  
const selecao = document.getElementById("opcao")
const value = selecao
console.log(value);
// console.log(selecao)
}
// const forme = document.getElementById("from")
// console.log(forme)
// }
 adm();
//  https://www.youtube.com/watch?v=XfODKuftA6Q
  return (
    <div>
      <select id="opcao">
        <option value="/entradas"> Entradas </option>
        <option value="/sobremesas">Sobremesas  </option>
        <option value="/principal"> Prato principal </option>
        <option value="/Funcionario"> Funcionarios </option>
        <option value="/cliente"> Clientes </option>
      </select>
      <form  >
        <input type="text"id="form" />
      </form>
    </div>
  )
}

export default Admin
