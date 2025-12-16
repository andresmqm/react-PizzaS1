import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Profile() {

  const { email, logout } = useContext(UserContext);



  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Perfil del Usuario</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {email}
          </Card.Text>

          <Button variant="danger" onClick={logout}>
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
