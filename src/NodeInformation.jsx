import {Container, Col, Row } from "react-bootstrap";
import CardInformation from "./NetworkInformation";

function NodeInformation() {
    const [thingspeakData, setNodeData] = useState([''])
    const [sensorsData, setSensorsData] = useState([''])
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
    return (
        <div className="container">
            <h2 style={{alignSelf:"start"}}>Mis Redes</h2>
            <Row>
            <img src='./jaula_salmon.jpg' style={{height:'30vh', width:'70vw'}}></img>
            <MatrixCage/>
            </Row>
        </div>
    );
}
export default NodeInformation;