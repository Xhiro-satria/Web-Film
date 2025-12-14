import { Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import fury from "../assets/img/BattleGround/fury.jpg"
import ridge from "../assets/img/BattleGround/ridge.jpg"
import black from "../assets/img/BattleGround/black.jpg"

const BattleGround = () => {
    return (
        <div>
            <Container>
                <br id="battleground"/>
                <br/>
                <h1 className="text-white">Battle Ground Movies</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-light text-white movieImage">
                        <Image src={fury} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Fury</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/zbf5IkOQZ9U?si=N5nig5O9BlM8kLMX" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={ridge} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Hacksaw Ridge</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/ildYbTk-t4w?si=g3v2F2RHJusulGyL" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={black} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Black Hawk Down</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/XnrJA-ZkMw8?si=LuKXebwDHCaZKTaU" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BattleGround