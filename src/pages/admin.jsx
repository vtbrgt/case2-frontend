import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import './admin.css'

function Admin() {
  return (
    <div className="body" >
      <section className="adm">
     <li className="voltar"> <Button variant="dark" type="submit" ><Link className="text-deco" to="/adm/principal">Principal</Link></Button></li><br/>
     <li className="voltar">  <Button variant="dark" type="submit"><Link className="text-deco" to="/adm/entadas">Entradas</Link></Button></li><br/>
     <li className="voltar">   <Button variant="dark" type="submit"><Link className="text-deco" to="/adm/sobremesas">Sobremesas</Link></Button></li><br/>
     <li className="voltar">   <Button variant="dark" type="submit"><Link className="text-deco" to="/adm/funcionarios">Funcionarios</Link></Button></li>
    </section>
    </div>
  )
}

export default Admin
