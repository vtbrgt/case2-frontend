import React,{useState} from 'react'
 import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  
const Login = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    console.log("submit",{email,password})
    
  }

    return (
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button type="submit">
          Entrar
        </Button>
      </Form>
    );
  }

export default Login
