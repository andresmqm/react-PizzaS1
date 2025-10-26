import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavPizza() {

    const total = 25000;
    const token = true;

  return (
    <>


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><i class="fa-solid fa-pizza-slice"></i>Home</Nav.Link>
            <Nav.Link href="#Profile"><i class="fa-solid fa-user"></i>{token ? "Profile" : "Registrer"}</Nav.Link>
            <Nav.Link href="#Logout"><i class="fa-solid fa-lock"></i>{token? "logout" : "Login"}</Nav.Link>

            <Nav.Link href="#Total: $">Total: {total.toLocaleString()}$</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavPizza;