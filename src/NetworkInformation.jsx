import {Button, Card, Row} from 'react-bootstrap';
//import { useSocket } from "./CommunicationComponent/SocketContext";
//import UserContext from "../UserContext";
import { useState, useEffect/*, useContext*/ } from "react";
import MatrixCage from './MatrixCage';
//import { useCallback } from 'react';
//import Loader from './Loader';

function CardInformation(props) {
  //const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [thingspeakData, setNodeData] = useState([''])
  const [sensorsData, setSensorsData] = useState([''])
  //const [name, setName] = useState("");
  const [loading, setLoading] = useState(false)
  
  //const socket = useSocket();
  //const {user, setUser} = useContext(UserContext)
  
  useEffect(() => {
    if(props.name !== null){
      setLoading(true)
      setName(props.name)
      }
      //setEmail(user.email)

  })
  useEffect(() => {
    async function fetchData(){

      fetch('https://api.thingspeak.com/channels/2299191/feeds.json?results=2', {
        method: 'GET',
        headers:{
          "Content-Type": "application/json", 
          /*'Access-Control-Allow-Origin': '*',  */
        },
      }).then(async(response) => {
        const feed = await response.json();
        setSensorsData(feed.fields)
        setNodeData(feed.channel)
        console.log(feed)
        //console.log(feed)
        
        /*if(loggedOutResponse.ok){
          setLogged(false)
          setUser(null)
          localStorage.clear()
        }
        else{
          alert("No saliste correctamente");
        }*/
        
        //inputText.current.value = "" //
    }); 
  }
  fetchData();
}, []);


  /*const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      
      if(user!== null && room !== null){
        console.log("submit", user.email)
        socket.emit("join", { email, room });
        //socket.emit("room:join", { email, room });
        window.location.href = `/transmition/room/${room}`;
      }
      else{
        console.log("no user")
      }
    },
    [email, room, socket]
  );*/

  /*const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      window.location.href = `/transmition/room/${room}`;
    },
    [room]
  );

  useEffect(() => {
    socket.on("join", handleJoinRoom);
    //socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("join", handleJoinRoom);
      //socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);
  */

  return (
    <div>
      <Row>
    <Card style={{margin:"15px", textAlign:"center"}}  className="bg-dark text-white">
        {(props.name === "Microscopio")? 
            <Card.Img className="card-img" style={{opacity:"60%"}} src="Microscopios.png" height={'260px'} alt="Card image" />
            :
            <Card.Img className="card-img" style={{opacity:"35%"}} src="salmonera.jpg" height={'260px'} alt="Card image" />

            }
            {/*<Card.Img as="img" className="card-img" src="Microscopios.png" height={'260px'} alt="Card image" />
        */}
        <Card.ImgOverlay style={{padding:"0px"}} >
            <Card.Body style={{padding:"0px", backgroundColor:"rgba(0,0,0,0.5)", margin:"0%", border: "[30px solid #000]"}}>
              <Row>
                <Card.Title >Salmonera Antarfood</Card.Title>
              </Row>
              <Row>
                <Card.Text  >12 nodos{/*props.station*/}</Card.Text>
              </Row>
              <div>{thingspeakData.name}</div>
            </Card.Body>
            <Card.Text >
              {(props.name === "Microscopio")? 
                <Button /*onClick={handleSubmitForm}*/ style={{margin:"5%", padding:"10%", width:"30%"}} className="button"> {/*props.state? Disponible : No*/} Ver red </Button>
                :
                <Button /*onClick={handleSubmitForm}*/ style={{margin:"5%", padding:"10%", width:"30%", paddingTop:"15%"}} className="button" href={`/nodes`}> {/*props.state? Disponible : No*/} Ver red </Button>

              }
            </Card.Text>
            <Card.Text>{/*Iniciada hace current time-props.*/}</Card.Text>

            <Card.Footer style={{backgroundColor:"#212529"}}>
              <div className="text-muted" style={{Color:"#ffffff", bottom:"auto"}}>Ubicación</div>
            </Card.Footer>
        </Card.ImgOverlay>
        </Card>
        <Row>Última actualización: {thingspeakData.updated_at}</Row>
        <Row>
          Ubicación
          Latitud: {thingspeakData.latitude}
          Longitud: {thingspeakData.longitude}
        </Row>
    </Row>
  
  </div>
  );
}

export default CardInformation;