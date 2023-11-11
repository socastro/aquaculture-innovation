import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "./stylesheets/header.css";


{/*
const ModalSignIn = props => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user)
      })
      .catch(err => {
        const { code, message } = err
        console.log(code, message)
      })
  }
*/}


function Header(){
    //const navigate = useNavigate();

  //Hook para abrir el menu
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  //Hooks para Modal Registro
  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  //Hooks para Acceso por Usuario
  const [showU, setShowU] = useState(false);
  const handleCloseU = () => setShowU(false);
  const handleShowU = () => setShowU(true);

  //Hooks para la selección de la opción otros **********************pasar a un componente
  const [SelectOther, setSelectOther] = useState(false)
  
  const handleSelection = (position) => {
    setSelectOther(!SelectOther);
    //setPosition(position)
  }
  
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
            {/*{ user !== null && user.roles[0] !== "ROLE_USER" &&
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            }
            { user!== null &&
            <li>
              <Link to="/transmition">Transmisiones</Link>
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
            <Button onClick={logOut}>Cerrar sesión</Button>
          }*/}
              <button className="btn btn__login" onClick={()=>{handleShowU()}}>Acceder</button>
            
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
        </header>


          
    );
  }
  
export default Header;

  