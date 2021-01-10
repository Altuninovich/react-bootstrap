import React from "react";
import Slider from "./Slider";
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import car1 from "../images/3063.jpg";
import car2 from "../images/1332775038_savv-91.jpg";
import car3 from "../images/fonstola.ru_90241_1152x864.jpg";
import Jumbotron from "./Jumbatron";

const cars = [car1,car2, car3];

const RenderCard = ({car}) => {
    return (
        <Col>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={car}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    exclusive car samples
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

const Home = () => {
    return (
        <>
            <Slider/>
            <Container>
                <Row>
                    {cars.map((car, id) => <RenderCard key={id} car={car}/>)}
                </Row>

            </Container>
            <Jumbotron/>
            <Container style={{marginBottom: "30px"}}>
                <Row>
                    <Col md={7}>
                        <img src={car2} height={400}/>
                    </Col>
                    <Col md={5}>
                        <h1>track fighter</h1>
                        <p>The best cars in the world Discount for this model is $ 5. Wholesale for each model 10 $ discount.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;