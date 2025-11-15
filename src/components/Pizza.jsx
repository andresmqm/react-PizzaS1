import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Pizza() {

  const apiUrl = "http://localhost:5000/api/pizzas/p001"

  const [napo, setNapo] = useState([])

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
        <Card.Text className='ingre'><p><i class="fa-solid fa-pizza-slice"></i>{n.desc}</p></Card.Text>
        <hr/>
        <Card.Text className='ingre'>Ingredientes <p><i class="fa-solid fa-pizza-slice"></i>{n.ingredients}</p></Card.Text>
        <hr/>
        <Card.Title className='price'>${n.price.toLocaleString('es-CL')}</Card.Title>
        
        <div className='botones'>
       <Button variant="light">Ver mas <i class="fa-solid fa-eye"></i></Button> 
       <Button variant="dark">Añadir mas <i class="fa-solid fa-cart-shopping"></i></Button>
       </div>
      </Card.Body>
    </Card>
        )
      })}
      
      
    </div>

  )
}
