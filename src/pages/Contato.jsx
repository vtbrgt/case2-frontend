import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contato.css';

function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    event.target.reset();
  };

  return (
    <div className="body">
      <img src="../assets/contato.jpg" alt="" />
      <section>
        <Container className="conteudo-margin ">
          <h1 className="contact">Contato</h1>
          <p className="text">Entre em contato conosco</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite seu nome completo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Digite seu e-mail"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="assunto">
              <Form.Label> Assunto:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite o assunto"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mensagem:</Form.Label>
              <Form.Control required as="textarea" rows={3} />
            </Form.Group>
            <div className="click">
              <Button variant="dark" type="submit">
                Enviar contato
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default Contato;
