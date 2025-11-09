import React, { useState } from 'react'
import { pizzasImport } from '../../Material de apoyo - Pizzas/pizzas'
import CardPizza2 from './CardPizza2'

export default function Home(props) {
  const[pizzas, setPizzas] = useState(pizzasImport)


  return (
    
    
    <div className='cards'>
     {pizzas.map((pizza, i)=>(
      
          <CardPizza2 key={i} pizzas={pizza}/>
          
      
      ))}


    </div>

  
    
  )
  
}

