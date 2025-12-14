import { Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import antman from "../assets/img/superhero/antman.jpg"
import batman from "../assets/img/superhero/batman.jpg"
import superman from "../assets/img/superhero/superman.jpg"
import rebelion from "../assets/img/superhero/rebelion.jpg"
import joker from "../assets/img/superhero/joker.jpg"
import gun from "../assets/img/superhero/gun.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br id="Superhero"/>
                <br/>
                <h1 className="text-white">Super Hero Movies</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-light text-white movieImage">
                        <Image src={batman} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Batman</Card.Title>
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
                        <Image src={rebelion} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Rebellion</Card.Title>
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
                        <Image src={antman} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Ant-Man</Card.Title>
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
                        <Image src={joker} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Joker</Card.Title>
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
                        <Image src={superman} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Superman</Card.Title>
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
                        <Image src={gun} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Maverick Gun</Card.Title>
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

export default Superhero