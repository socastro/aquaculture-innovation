import React, { useState, useEffect } from 'react';
import {Button, Row, Col, Container, Form} from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";

import { firestore } from './firebase';
 

const MainView = () => {
  const [apiKey, setApiKey] = useState(); // Initial number of rows
  const [channel, setChannel] = useState(); // Initial number of columns
  const [rows, setRows] = useState(); // Initial number of rows
  const [columns, setColumns] = useState();
  const [location, setLocation] = useState();
  const [name, setName] = useState();
  const [networks, setNetworks] = useState([]);
  //const [matrix, setMatrix] = useState(createEmptyMatrix(2, 4));

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();  
    console.log('addnetwork')
    try {
        const docRef = await addDoc(collection(firestore, "redes"), {
          rowsCage: rows,    
          columnsCage: columns,
          location: location
        });
        console.log("Document written with ID: ", docRef.id);
        setName('')
        setRows('')
        setColumns('')
        setLocation('')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const fetchPost = async () => {
   console.log('fetch');
    await getDocs(collection(firestore, "redes"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setNetworks(newData);                
            console.log(networks, newData);
        })
   
}

useEffect(()=>{
    fetchPost();
}, [])

  return (
    <div style={{width:'27vw'}}>
      <Container style={{margin:'2vw', width:'70vw', borderBlockColor:'navy', backgroundColor:'#eefbff', borderRadius:'2px'}}>
        
        <Row>
          <h3>Registra una nueva red</h3>
        </Row>

          <Row>

          <Form.Group style={{margin:'1vw', width:'20vw'}}>                
              <Form.Label>Nombre:  </Form.Label>
              <Form.Control   style={{width:'20vw'}} type="number" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
        </Row>
        <Row>
          <Form.Group style={{margin:'1vw', width:'20vw'}}>                
              <Form.Label>Filas:  </Form.Label>
              <Form.Control  style={{width:'20vw'}} type="number" value={columns} onChange={(e) => setRows(e.target.value)} />
            </Form.Group>
        </Row>
        <Row>
          <Form.Group style={{margin:'1vw', width:'20vw'}}>                
              <Form.Label>Columnas:  </Form.Label>
              <Form.Control  style={{width:'20vw'}} type="number" value={columns} onChange={(e) => setColumns(e.target.value)} />
            </Form.Group>
        </Row>
        <Row>
          <Form.Group style={{margin:'1vw', width:'20vw'}}>                
              <Form.Label>Location:  </Form.Label>
              <Form.Control  style={{width:'20vw'}} type="number" value={location} onChange={(e) => setLocation(e.target.value)} />
            </Form.Group>
        </Row>
        
        <Button style={{backgroundColor:'#70a8da'}}onClick={handleSubmit}>Guardar</Button>
      </Container>
      
    </div>
  );
};

export default MainView;
