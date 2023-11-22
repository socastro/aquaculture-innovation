import {Button, Card,Col, Row, Form, Modal} from 'react-bootstrap';
//import { useSocket } from "./CommunicationComponent/SocketContext";
//import UserContext from "../UserContext";
import { useState, useEffect/*, useContext*/ } from "react";
import MatrixCage from './MatrixCage';
import NodeInformation from './NodeInformation';
//import { useCallback } from 'react';
//import Loader from './Loader';

function CardInformation(props) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
    return (
        <div className="container" style={{marginTop:'1vw'}}>
            <h2 style={{alignSelf:"start"}}>Salmonera</h2>
            <h5>Rango temperatura ideal: 12 °C - 15 °C</h5>
            <div>3 Nodos</div>
            <div> Ubicación: <a href="https://maps.app.goo.gl/4QfFjUvxNgmzC9Hm7">Antarfood
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>  
              </a> 
            </div>
            <Row>
            <Col style={{width:'27vw'}}>
            <img src='/jaula_salmon.jpg' style={{width:'27vw', margin:'2vw'}}></img>
            <MatrixCage rows={2} columns={4} />
            </Col>
            <Col >
            <Row>
              Simulación
            </Row>
            <Row>
            <img style={{ maxWidth:'25vw', height:'70vh'}} src='/Simulacion_redes_de_sensores.gif'></img>
            </Row>
            </Col>
            </Row>
            <Row>
              <Button style={{width:'10vw'}} onClick={handleShowModal}>Agregar nodo</Button>
            </Row>
            <Row>
              <NodeInformation/>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} animation={false}/*className="modal fade" id="registroModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"*/>
            <Modal.Header closeButton>
                    <Modal.Title>Agrega un nodo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                        <Form id ="registro-form">
                          {/*<Form.Group>
                            <Form.Label className='titles'>Nombre</Form.Label>
                            <Form.Control type = "text" id = "signup-name" placeholder="Nombre" onChange={(e) => setNameRegister(e.target.value)} required /> 
                          </Form.Group>*/}
                            <Form.Group>
                              <Form.Label className='titles'>Nombre</Form.Label>
                                <Form.Control id = "signup-email" /*placeholder="example@domain.com" onChange={(e) => setEmailRegister(e.target.value)}*/ required /> 
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className='titles'>API Key</Form.Label>
                                <Form.Control  id = "signup-password" /*placeholder="**********" onChange={(e) => setPasswordRegister(e.target.value)}*/ required />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className='titles'>Canal</Form.Label>
                              <Form.Control />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className='titles'>Tipo de sensor</Form.Label>
                              <Form.Control />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className='titles'>Campo N°</Form.Label>
                              <Form.Control />
                            </Form.Group>
                        </Form>
                        <Modal.Footer>
                            <Button type="button" style={{backgroundColor:'#70a8da'}} variant="primary" /*onClick={onSubmitRegister}*/ /*onClick={()=> registro(registro_user,registro_pass)}*/>Guardar</Button>
                        </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>
    );
}

export default CardInformation;