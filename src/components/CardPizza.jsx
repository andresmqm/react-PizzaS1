import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza(props) {


  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <hr/>
        <Card.Text className='ingre'>Ingredientes <p><i class="fa-solid fa-pizza-slice"></i>{props.ingredients}</p></Card.Text>
        <hr/>
        <Card.Title className='price'>${props.price.toLocaleString('es-CL')}</Card.Title>
        
        <div className='botones'>
       <Button variant="light">Ver mas <i class="fa-solid fa-eye"></i></Button> 
       <Button variant="dark">Añadir mas <i class="fa-solid fa-cart-shopping"></i></Button>
       </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza; 
