import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Profile() {

  
  const userEmail = "juanito@gmail.com";

  const handleLogout = () => {
    alert("Sesión cerrada.");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Perfil del Usuario</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {userEmail}
          </Card.Text>

          <Button variant="danger" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
