import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css";
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const apiUrl = "http://localhost:5000/api/pizzas"

  const [pizza, setPizza] = useState([]);

  const{addToCart} = useContext(CartContext);

  const navigate = useNavigate();

  const getPizza = async() =>{
    const res = await fetch(apiUrl)
    const pizzas = await res.json()
    setPizza(pizzas)
  }

  useEffect(()=>{
    getPizza()
  }, [])


  return (

    <div className='container'>

      {pizza.map((p)=>{
        return(

          <Card key={p.id} style={{ width: '25rem' }}>
      <Card.Img variant="top" src={p.img} />
      <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <hr/>
        <Card.Text className='ingre'><p><i className="fa-solid fa-pizza-slice"></i>{p.desc}</p></Card.Text>
        <hr/>
        <Card.Text className='ingre'>Ingredientes <p><i className="fa-solid fa-pizza-slice"></i>{p.ingredients.join(",")}</p></Card.Text>
        <hr/>
        <Card.Title className='price'>${p.price.toLocaleString('es-CL')}</Card.Title>
        
        <div className='botones'>
       <Button variant="light" onClick={() => navigate (`/pizza/${p.id}`)}>Ver mas <i className="fa-solid fa-eye"></i></Button> 
       <Button variant="dark" onClick={() => addToCart(p)} >Añadir mas <i className="fa-solid fa-cart-shopping"></i></Button>


       </div>
      </Card.Body>
    </Card>
        )
      })}
      
      
    </div>

  )
}


