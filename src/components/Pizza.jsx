import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../contexts/CartContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function Pizza() {

  const {id} = useParams();

  const navigate = useNavigate();

  const apiUrl = `http://localhost:5000/api/pizzas/${id}`

  const [napo, setNapo] = useState([])

  const {addToCart} = useContext(CartContext);

  const getNapo = async() =>{
    const res = await fetch(apiUrl)
    const pizzas = await res.json()
    setNapo([pizzas])
  }

  useEffect(()=>{
    getNapo()
  }, [])


  return (

    <div>

      {napo.map((n, i)=>{
        
        return(

          <Card key={i} style={{ width: '25rem' }}>
      <Card.Img variant="top" src={n.img} />
      <Card.Body>
        <Card.Title>{n.name}</Card.Title>
        <hr/>
        <Card.Text className='ingre'><p><i className="fa-solid fa-pizza-slice"></i>{n.desc}</p></Card.Text>
        <hr/>
        <Card.Text className='ingre'>Ingredientes <p><i className="fa-solid fa-pizza-slice"></i>{n.ingredients}</p></Card.Text>
        <hr/>
        <Card.Title className='price'>${n.price.toLocaleString('es-CL')}</Card.Title>
        
        <div className='botones'>
       <Button variant="light"onClick={() => navigate (`/pizza/${n.id}`)}>Ver mas <i className="fa-solid fa-eye"></i></Button> 
       <Button variant="dark" onClick={() => addToCart(n.id)} >Añadir mas <i className="fa-solid fa-cart-shopping"></i></Button>
       </div>
      </Card.Body>
    </Card>
        )
      })}
      
      
    </div>

  )
}
