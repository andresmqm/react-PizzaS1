import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function NavPizza() {

    
    const token = true;

    const { getTotal } = useContext(CartContext);
    



  return (
    <>


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><i className="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link as={Link} to="/register"><i className="fa-solid fa-user"></i>Register</Nav.Link>
            <Nav.Link as={Link} to="/pizza/p001"><i className="fa-solid fa-pizza-slice"></i>Pizza</Nav.Link>
            <Nav.Link as={Link} to="/login"><i className="fa-solid fa-lock"></i>{token? "logout" : "Login"}</Nav.Link>
            <Nav.Link as={Link} to="/profile"><i className="fa-solid fa-circle-user"></i>{token ? "Profile" : "Registrer"}</Nav.Link>

            <Nav.Link as={Link} to="/cart"><i className="fa-solid fa-dollar-sign"></i> Total: {getTotal().toLocaleString("es-CL")}$</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavPizza;