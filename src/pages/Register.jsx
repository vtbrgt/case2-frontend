import React from 'react';
import Button from 'react-bootstrap/Button'
import { Api } from '../api/Api';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleRegister = (values) => {
    Api.post("/register", {
      email_users: values.email,
      senha_users: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
      navigate('/login', { replace: true })
    });
  };

  return (
    <div className='body'>

      <img src="../assets/contato.jpg" alt="" />
      <section>
        <div className="container center">
          <h1>Cadastro</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}

          >
            <Form className="register-form">
              <div className="register-form-group">
                <Field name="email" required className="form-field" placeholder="Email" />

                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <Field name="password" required className="form-field" placeholder="Senha" />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              {/* <div className="form-group">
                <Field
                  name="confirmation" className="form-field" placeholder="Confirme sua senha" required
                />

                <ErrorMessage
                  component="span"
                  name="confirmation"
                  className="form-error"
                />
              </div> */}
              <div>
                <p>Já é cadastrado? Faça login <Link to="/login">Aqui</Link></p>
              </div>
              <Button variant="dark" type="submit">
                Login
              </Button>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
}
export default Login;