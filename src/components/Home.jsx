import React from 'react'
import appFirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
import Crud from './CrudCliente'
import AppTap from './Tabs'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const auth = getAuth(appFirebase)

export const Home = ({correoUsuario}) => {
    return (
      <Container className='container-main'>
        <Row className='wrap-space-between'>
          <h2>Bienvenido de nuevo {correoUsuario}</h2>
        </Row>

        <br/>

        <AppTap />

        <br/>

        <div>
          <button onClick={() => signOut(auth)} className='btn btn-outline-secondary'>Cerrar sesión</button>
        </div>
      </Container>
    )
  }
  