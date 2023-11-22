import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "./stylesheets/header.css";
import {firestore, firebaseAuth} from './firebase'
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
//import firebase from 'firebase'
require('firebase/auth')






function Header(){
  const navigate = useNavigate();

  //Hook para abrir el menu
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  //Hooks para Modal Registro
  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const [user, setUser] = useState(null)
  
  //Hooks para Acceso por Usuario
  const [emailAccess, setEmailAccess] = useState("")
  const [passwordAccess, setPasswordAccess] = useState("")
  const [showU, setShowU] = useState(false);
  const handleCloseU = () => setShowU(false);
  const handleShowU = () => setShowU(true);


  
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    
    return () => 
      window.removeEventListener("resize", handleResize);
  }, []);
    
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const onSubmitSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(firebaseAuth, emailAccess, passwordAccess)
    //signInWithEmailAndPassword(firebaseAuth, emailAccess, passwordAccess)
      .then(res => {
        console.log(res.user)
        handleCloseU()
        setUser(res.user)
        localStorage.setItem('user', res.user)

      })
      .catch(err => {
        const { code, message } = err
        console.log(code, message)
        alert("ERROR: ", code, message)
      })
}

const [emailRegister, setEmailRegister] = useState('')
const [passwordRegister, setPasswordRegister] = useState('');
 
const onSubmitRegister = async (e) => {
  e.preventDefault()
     
  await createUserWithEmailAndPassword(firebaseAuth, emailRegister, passwordRegister)
    .then((userCredential) => {
      // Signed in
      handleCloseR()
      setUser(userCredential.user)
      localStorage.setItem('user', JSON.stringify(userCredential.user))
      console.log(user);
      navigate("/")
                // ...
      })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
              // ..
    });
}

const onLogOut = () => {               
  signOut(firebaseAuth).then(() => {
  // Sign-out successful.
    setUser(null);
    localStorage.setItem('user', null)
    navigate("/");
    console.log("Signed out successfully")
  }).catch((error) => {
  // An error happened.
    alert("No se cerró correctamente")
  });
}
    
return(
    <header className="header">
    <div className="header__content">
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link to="/networks">Redes</Link>
            </li>
            <li>
              <Link to="/nodes">Nodos</Link>
            </li>
            { user !== null && /*user.roles[0] !== "ROLE_USER"*/ 
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            }
            <li>
              <Link to="/help">Help</Link>
            </li>
            {user === null &&
              <button className="btn" onClick={()=>{handleShowR()}}>Registrate</button>
            }
            {user === null &&
              <button className="btn btn__login" onClick={()=>{handleShowU()}}>Acceder</button>
            }
            {user !== null &&
              <button className="btn btn__login" onClick={()=>{onLogOut()}}>Cerrar sesión</button>
            }
            
          </ul>

        </nav>
        
        <div className="header__content__toggle">
          {!menuOpen ? (
            <button className="btn" onClick={menuToggleHandler} ><img src="/toogle.png" alt="Toogle button menu" height="50%" width="50%" /></button> //BiMenuAltRight
          ) : (
            <button onClick={menuToggleHandler}><img src="/toogle.png" alt="Toogle button menu" height="50%" width="50%" /></button>
          )}
        </div>
        </div>
        <Modal show={showU} onHide={handleCloseU} animation={false}/*className="modal fade" id="modal_user" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"*/>
            <Modal.Header closeButton>
                <Modal.Title>Accede con tu Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{display: "flex", flexWrap: "wrap", alignContent: "space-between", justifyContent: "center"}}>
                <button className="btn__google"  href='http://127.0.0.1:8030/api/auth/login'>
                  <span style={{margin:"5px"}}>
                                    {/*<ion-icon name="cloud-download-outline"></ion-icon>
                    <FontAwesomeIcon icon="fa-brands fa-google" />*/}
                    <img src="/gmail_logo.png" alt="google_logo" style={{maxWidth:"20px"}}></img>
                  </span>
                  Ingresar con google
                </button>
              </div>
                <hr></hr>

                <Form id ="login-form">
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type = "email" id = "login-email" placeholder="example@domain.com" onChange={(e) => setEmailAccess(e.target.value)} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type = "password" id = "login-password" placeholder="**********" onChange={(e) => setPasswordAccess(e.target.value)} required></Form.Control>
                    </Form.Group>
                </Form>
                <div>¿Olvidaste tu contraseña?</div>
                <Modal.Footer>
                    <ul><Button onClick={onSubmitSignIn} type="submit" variant="primary" className="btn btn-lg btn-block" >Acceder</Button></ul>
                </Modal.Footer>
            </Modal.Body>     
          </Modal>

          <Modal show={showR} onHide={handleCloseR} animation={false}/*className="modal fade" id="registroModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"*/>
            <Modal.Header closeButton>
                    <Modal.Title>Registrate!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                        <Form id ="registro-form">
                          <Form.Group>
                            <Form.Label className='titles'>Nombre</Form.Label>
                            <Form.Control type = "text" id = "signup-name"   required /> 
                          </Form.Group>
                          <Form.Group>
                            <Form.Label className='titles'>Empresa</Form.Label>
                            <Form.Control type = "text" id = "signup-name"  required /> 
                          </Form.Group>
                            <Form.Group>
                              <Form.Label className='titles'>Mail</Form.Label>
                                <Form.Control type = "email" id = "signup-email"  onChange={(e) => setEmailRegister(e.target.value)} required /> 
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className='titles'>Contraseña</Form.Label>
                                <Form.Control type = "password" id = "signup-password" placeholder="**********" onChange={(e) => setPasswordRegister(e.target.value)} required />
                            </Form.Group>
                        </Form>
                        <Modal.Footer>
                            <Button type="button" style={{backgroundColor:'#70a8da'}} variant="primary" onClick={onSubmitRegister} /*onClick={()=> registro(registro_user,registro_pass)}*/>Registrarse</Button>
                        </Modal.Footer>
            </Modal.Body>
          </Modal>
        </header>
        


          
    );
}
export default Header;

  