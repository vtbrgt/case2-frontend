import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Contato.css'

function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Mensagem enviada com sucesso!')
    event.target.reset()
  }
  return (
  <section>
    <Container className='conteudo-margin'>
      <h1 className="contact">Contato</h1>
      <p className= "text">Entre em contato conosco</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome completo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar contato
        </Button>
      </Form>
    </Container>
    </section>
  );
}

export default Contato;



