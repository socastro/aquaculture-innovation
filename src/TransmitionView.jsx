import {Button, Card, Container, Col, Row } from "react-bootstrap";
//import CardInformation from "./NetworkInformation";

function TransmisionView() {
    const networksType = ["Salmones", "Camarones", "Atún"]
    return (
        <div className="container">
            <h2 style={{alignSelf:"start"}}>Mis Redes</h2>
            <Container >
                <Row>
                    
        {networksType.map((name, index) => 
        <Col key={index} >
        <Card style={{textAlign:"center", padding:"0px", margin:"0.5vw"}}  className="bg-dark text-white">
            {(name !== "Salmonera")? 
                <Card.Img className="card-img" style={{opacity:"60%"}} src="/salmonera.jpg" height={'260px'} alt="Card image" />
                :
                <Card.Img className="card-img" style={{opacity:"35%"}} src="/salmonera.jpg" height={'260px'} alt="Card image" />

                }
                {/*<Card.Img as="img" className="card-img" src="Microscopios.png" height={'260px'} alt="Card image" />
            */}
            <Card.ImgOverlay style={{padding:"0px", margin:"0px"}} >
                <Card.Body style={{padding:"0px", backgroundColor:"rgba(0,0,0,0.5)", margin:"0%", border: "[30px solid #000]"}}>
                <Row>
                    <Card.Title >{name} Antarfood</Card.Title>
                </Row>
                <Row>
                    <Card.Text  >12 nodos{/*props.station*/}</Card.Text>
                </Row>
                </Card.Body>
                <Card.Text >
                {//(props.name === "Microscopio")? 
                    <Button /*onClick={handleSubmitForm}*/ style={{margin:"5%", padding:"10%", width:"30%", paddingTop:"15%", color:"black"}} className="button" href={`/network/${name}`}> {/*props.state? Disponible : No*/} Ver red </Button>

                }
                </Card.Text>
                <Card.Text>{/*Iniciada hace current time-props.*/}</Card.Text>

            </Card.ImgOverlay>
        </Card>
        </Col>

        )}
  
                </Row>
            </Container>

    </div>

    );
}
export default TransmisionView;