import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
    return (
        <div>           
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#">Film-Favorit</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                        <Nav.Link href="#battleground">Battle Ground</Nav.Link>
                        <Nav.Link href="#Superhero">Super Hero</Nav.Link>
                        <Nav.Link href="#romance">Romance</Nav.Link>
                        <Nav.Link href="#anime">Anime</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;