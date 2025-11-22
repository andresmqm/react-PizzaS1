import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza2(props) {
    const pizza = props.pizzas;


  return (
    
    <Card className="pizzaCards" >
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
            {pizza.desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {pizza.ingredients.map((ingrediente, index) => (
    <ListGroup.Item key={index}>
        {ingrediente}
    </ListGroup.Item>
))}
        <ListGroup.Item className='price'>${pizza.price.toLocaleString('es-CL')}</ListGroup.Item>
      </ListGroup>
    </Card>

    
    
  );
}

export default CardPizza2;
