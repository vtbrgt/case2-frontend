import React, { useState } from 'react';
import { Api } from '../api/Api'
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Container } from 'react-bootstrap'
import './Login.css'
import Button from 'react-bootstrap/Button'

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    axios
    Api.post("/login", {
      email_users: values.email,
      senha_users: values.password,
    })
      .then((response) => {
        const validation = response.data.validation
        const result = () => {
          if (response.data.results && response.data.results.length > 0) {
            const result = response.data.results[0].email_users;
            // Resto do código aqui
          } else {
            console.error("Não há resultados válidos na resposta da API.");
          }
        }
        // const result = response.data.results[0].email_users
        console.log(result.result);

        if (validation) {
          localStorage.setItem('tokenAuth', validation);
          localStorage.setItem('userAuth', JSON.stringify(result));
          navigate('/adm', { replace: true })
          if (token) {
            alert("Usuário logado com sucesso!");
            const jsonStorage = localStorage.getItem('userAuth');
            console.log(jsonStorage);
          }
        } else {
          console.log(response.data);
          alert("Credenciais inválidas!");
        }
      });
  };



  return (
    <div className="body">
      <section className='text'>
        <Container className="center">
          <h1>Login</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
          >
            <Form className=" login-form">
              <div className="form-group">
                <Field name="email" className="form-field" type="email" placeholder="Email" />

                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div><br />
              {/*Outro campo*/}
              <div className="form-group">
                <Field name="password" type="password" className="form-field" placeholder="Senha" />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <div>
                <p>Ainda não é cadastrado? Cadastre-se <Link to={"/register"}>Aqui</Link></p>
              </div>
              <Button variant="dark" type="submit">
                Login
              </Button>
            </Form>
          </Formik>
        </Container>
      </section>
    </div>
  );
}
export default Login;