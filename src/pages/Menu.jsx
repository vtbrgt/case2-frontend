import React from 'react'
import Loading from '../components/Loading'
import './Menu.css'
import { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {

  const blogFetch = axios.create({
    baseURL: 'https://apinoderest.onrender.com/',
    headers: {
      "Content-Type": "application/json",
    }
  });

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await blogFetch.get('/entradas');
      const data = response.data;
      console.log(data)

      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getPosts()

  }, []);

  const [principal, setPrincipal] = useState([])

  const getPrincipal = async () => {
    try {
      const response = await blogFetch.get('/principal');
      const data = response.data;
      console.log(data)

      setPrincipal(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getPrincipal()

  }, []);
  const [sobremesa, setSobremesa] = useState([])

  const getSobremesa = async () => {
    try {
      const response = await blogFetch.get('/sobremesas');
      const data = response.data;
      console.log(data)

      setSobremesa(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getSobremesa()

  }, []);

  return (
    <div>
      {/* <h1>Menu</h1> */}
      <div className='entradaMenu'>
        <div id='apresentar' className='bg'><h1 id='letra'>Entradas</h1></div>
        {posts.length === 0 ? <div className='centralizar'><Loading/></div> : (
          posts.map((equipaments) => (
            <div className='post' key={equipaments.id}>
              <h2>{ }</h2>
              <div className="tabela">

                <div className="informacoes">
                  <h1 className='nomePedido'>{equipaments.nome}</h1>
                  <p> {equipaments.ingredientes}</p>
                  <p>Preco: {equipaments.preco}</p>
                  <p>{equipaments.descricao}</p>
                  {/* <button className="btn envio" onClick={() => excluir(equipaments.id)}>Excluir</button> */}
                </div>

              </div>
            </div>
          ))
        )}

      </div>
      <div className='entradaMenu'>
        <div id='apresentar'className='bg2'><h1 id='letra'>Pratos Principais</h1></div>
        {principal.length === 0 ? <div className='centralizar'><Loading/></div> : (
          principal.map((equipaments) => (
            <div className='post' key={equipaments.id}>
              <h2>{ }</h2>
              <div className="tabela">

                <div className="informacoes">
                  <h1 className='nomePedido'>{equipaments.nome}</h1>
                  <p> {equipaments.ingredientes}</p>
                  <p>{equipaments.descricao}</p>
                  <p>Preco: R${equipaments.preco}</p>
                  {/* <button className="btn envio" onClick={() => excluir(equipaments.id)}>Excluir</button> */}
                </div>

              </div>
            </div>
          ))
        )}

      </div>
      <div className='entradaMenu'>
        <div id='apresentar'className='bg3'><h1 id='letra'>Sobremesas</h1></div>
        {sobremesa.length === 0 ? <div className='centralizar'><Loading/></div> : (
          sobremesa.map((equipaments) => (
            <div className='post' key={equipaments.id}>
              <h2>{ }</h2>
              <div className="tabela">

                <div className="informacoes">
                  <h1 className='nomePedido'>{equipaments.nome}</h1>
                  <p> {equipaments.ingredientes}</p>
                  <p>{equipaments.descricao}</p>
                  <p>Preco: R${equipaments.preco}</p>
                  {/* <button className="btn envio" onClick={() => excluir(equipaments.id)}>Excluir</button> */}
                </div>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  )
}

export default Menu
