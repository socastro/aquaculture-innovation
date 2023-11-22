import {Container, Col, Row, Button } from "react-bootstrap";
import CardInformation from "./NetworkInformation";
import { useState, useEffect } from "react";
import MatrixCage from "./MatrixCage";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'
import WaveProgress from "./WaterComponent";


function SensorInformation() {
    const [nodeData, setNodeData] = useState([''])
    const [sensorsData, setSensorsData] = useState([''])
    const [lastSensorValue, setLastSensor] = useState("")

    const [nodeData2, setNodeData2] = useState([''])
    const [sensorsData2, setSensorsData2] = useState([''])
    const [lastSensorValue2, setLastSensor2] = useState("")

    //const path = require('path');
    var type = 'Salmones'
    useEffect(() => {
        async function fetchDataG1(){
    
          fetch('https://api.thingspeak.com/channels/2299191/feeds.json?results=2', {
            method: 'GET',
            headers:{
              "Content-Type": "application/json", 
              /*'Access-Control-Allow-Origin': '*',  */
            },
          }).then(async(response) => {
            const feed = await response.json();
            setSensorsData(feed.feeds)
            setNodeData(feed.channel)
            setLastSensor(feed.feeds[1].field3)
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
      fetchDataG1();
    }, []);

    useEffect(() => {
      async function fetchDataG3(){
  
        fetch('https://api.thingspeak.com/channels/2342099/feeds.json?api_key=ZVI8QR5FQAB5ZQ4O&results=2', {
          method: 'GET',
          headers:{
            "Content-Type": "application/json", 
            /*'Access-Control-Allow-Origin': '*',  */
          },
        }).then(async(response) => {
          const feed2 = await response.json();
          setSensorsData2(feed2.feeds)
          setNodeData2(feed2.channel)
          //setLastSensor2(feed2.feeds[1].field1)
          setLastSensor2(feed2.feeds[1].field1)
          console.log(feed2)
      }); 
    }
    fetchDataG3();
  }, []);

    return (
        <div className="container" >
          <Row>
            
            <Container style={{backgroundColor:'#d3f6ff', borderRadius:'10px', height:'55vh', padding:'1vw', margin:'1vw', width:'23vw'}}>
            <h5>Nodo LoRa Sensor 2{/*nodeData2.name*/}</h5>
            <Row style={{height:'40vh'}}>
              <Col>
                Actualizado: {nodeData2.updated_at}  
                <hr></hr>
                Ubicación:
                <li>Latitud: {nodeData2.latitude}</li>
                <li>Longitud: {nodeData2.longitude}</li>
                <br></br>
              Temperatura
              <div style={{maxHeight:'10vh', width:'10vw'}}>
              {lastSensorValue!==null &&
              <Heat
              progress={lastSensorValue2}
              style={{backgroundColor:'white'}}
              range={{from:0, to:30}}
              sign={{ value: '°C', position: 'end' }}
              showMiniCircle={true}
              sx={{
                bgColor: {value:'black', transparency:'10'},
                background:'black',
                strokeWidth:{value:'6'},
                strokeColor:"green",
                barWidth: 5,
                valueSize: 20,
                valueWeight: 'lighter',
                textWeight: 'lighter',
              }}
            />
              /*<CircularProgressbar 
                value={lastSensorValue2}
                text={lastSensorValue2}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#a2e4f6",
                  textColor: "#ffff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                  height:'10vh',
                  textSize:'2vh'

                })}
              />*/}
              </div>
              </Col>
            </Row>
            </Container>
            <Col style={{width:'30vw'}}>
                <div style={{width:'28vw'}}>
                <img  src='/ThingSpeak_2.png'></img>
                </div>
              </Col>

            

            </Row>
        </div>
    );
}
export default SensorInformation;