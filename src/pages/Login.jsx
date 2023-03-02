import React from 'react'
 import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  
const Login = () => {
  const [email, setEmail] = userState("")

    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button type="submit">
          Entrar
        </Button>
      </Form>
    );
  }

export default Login
