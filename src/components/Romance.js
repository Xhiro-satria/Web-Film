import { Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import titanic from "../assets/img/romance/Titanic.jpg"
import dilan from "../assets/img/romance/dilan.jpg"
import ammonite from "../assets/img/romance/ammonite.jpg"

const Romance = () => {
    return (
        <div>
            <Container>
                <br id="romance"/>
                <br/>
                <h1 className="text-white">Romance Movies</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-light text-white movieImage">
                        <Image src={titanic} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Titanic</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={dilan} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Dilan 1991</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={ammonite} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Ammonite</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Romance