import {Container, Col, Row } from "react-bootstrap";
import CardInformation from "./NetworkInformation";

function TransmisionView() {

    return (
        <div className="container">
            <h2 style={{alignSelf:"start"}}>Mis Redes</h2>
            <Container >
                <Row>
                    <Col>
                        <CardInformation name="Salmones" />
                    </Col>
                    <Col>
                        <CardInformation name="Camarones" />
                    </Col>
                    <Col>
                        <CardInformation name="Atún" />
                    </Col>
                </Row>
            </Container>

    </div>

    );
}
export default TransmisionView;