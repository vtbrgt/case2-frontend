import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import './admin.css'

function Admin() {
  return (
    <div className="body" >
      <section className="adm">
      <Button variant="dark" type="submit" ><Link className="text-deco" to="/adm/principal">Principal</Link></Button><br/>
      <Button variant="dark" type="submit"><Link className="text-deco" to="/adm/entadas">Entradas</Link></Button><br/>
      <Button variant="dark" type="submit"><Link className="text-deco" to="/adm/sobremesas">Sobremesas</Link></Button><br/>
      <Button variant="dark" type="submit"><Link className="text-deco" to="/adm/funcionarios">Funcionarios</Link></Button><br/>
    </section>
    </div>
  )
}

export default Admin
