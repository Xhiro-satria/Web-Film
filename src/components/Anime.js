import { Card, Container, Row, Col, Button ,Image} from "react-bootstrap"
import demon from "../assets/img/anime/demon.jpg"
import aot from "../assets/img/anime/aot.jpg"
import jojo from "../assets/img/anime/jojo.jpg"
import chainsaw from "../assets/img/anime/chainsaw.jpg"
import jujutsu from "../assets/img/anime/jujutsu.jpg"
import clover from "../assets/img/anime/clover.jpg"

const Anime = () => {
    return (
        <div>
            <Container>
                <br id="anime"/>
                <br/>
                <h1 className="text-white">Top Anime</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-light text-white movieImage">
                        <Image src={demon} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Demon Slayer</Card.Title>
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
                        <Image src={aot} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Attack On Titan</Card.Title>
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
                        <Image src={jojo} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Jojo Bizzare</Card.Title>
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
                        <Image src={chainsaw} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Chainsaw Man</Card.Title>
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
                        <Image src={jujutsu} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
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
                        <Image src={clover} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Black Clover</Card.Title>
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

export default Anime