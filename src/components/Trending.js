import { Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import Ice from "../assets/img/trending/Ice.jpg"
import zoo from "../assets/img/trending/zoo.jpg"
import dora from "../assets/img/trending/dora.jpg"
import homealone from "../assets/img/trending/homealone.jpg"
import harry from "../assets/img/trending/harry.jpg"
import bighero from "../assets/img/trending/bighero.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br  id="trending"/>
                <br/>
                <h1 className="text-white" >Trending Movies</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-light text-white movieImage">
                        <Image src={Ice} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Ice Age</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/EcYiRIPkZt8?si=GelqOYsfHrfuGrZ2" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={homealone} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Home Alone</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/upqXWM2reWA?si=jr4H2lKQuujEcK6p" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={bighero} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Big Hero 6</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/_BDjaSJPfL4?si=A_8xj0UIexMkm9fi" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={zoo} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Zootopia</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/G3iA1sKHk7k?si=-F6jb--2wjV31Nzp" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={dora} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Dora</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://youtu.be/v8_Uo_F5mwM?si=FEVpAw1CzeuBNMaa" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-light text-white movieImage">
                        <Image src={harry} alt="Starwars" className="images"/>
                        <div className="bg-dark">
                        <div className="p-2 m-1 text-white">                           
                            <Card.Title className="text-center">Harry Potter</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Button variant="light" className="text-left bg-light w-100 fw-bold" as="a" href="https://www.youtube.com/live/7kguwrO1lfY?si=N8dYUZHhBDh2ViBA" target="_blank">Watch Now</Button>
                        </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending