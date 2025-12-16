
import './App.css'

import NavPizza from './components/Navbar'
import Footer from './components/Footer';

import NotFound from './Pages/NotFoundPages';
import HomePages from './Pages/HomePages';
import RegisterPages from './Pages/RegisterPages';
import LoginPages from './Pages/LoginPages';
import CartPages from './Pages/CartPages';
import PizzaPages from './Pages/PizzaPages';
import ProfilePages from './Pages/ProfilePages';



import {Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import{ useContext } from 'react';
import { LogoutContext } from './contexts/LogoutContext';
import { UserContext } from './contexts/UserContext';



function App() {

    const {token} = useContext(UserContext);


  return (
    <>
<NavPizza></NavPizza>


{/*
    <Profile></Profile>

//SI DESEA VER EL HOME DESCOMENTALO (CORRESPONDE AL HITO N°4)

<Home></Home>

*/}

{/*

//SI DESEA VER EL HOME DESCOMENTALO (CORRESPONDE AL HITO N°3)


<Cart></Cart>


*/}




{/*
<Header></Header>

<div className='cards'>

<CardPizza
    name= "Pizza Napolitana"
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    ingredients={[" mozzarella ", "tomates ", "jamón ", "orégano "]}
    price={5950}

></CardPizza>

<CardPizza
    name= "Pizza Española"
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    ingredients={[" mozzarella ", "gorgonzola ", "parmesano ", "provolone "]}
    price={6950}

></CardPizza>

<CardPizza
    name= "Pizza Pepperoni"
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    ingredients={[" mozzarella ", "pepperoni ", "orégano "]}
    price={6950}

></CardPizza>

</div>



<Register></Register>

{/*

SI QUIERES ACCEDER AL LOGIN DESCOMENTA... :)

<Login></Login>


<Pizza></Pizza>

*/}

<Routes>

<Route path="/" element={<HomePages/>} />
<Route path='/register' element={token ? <Navigate to="/" /> : <RegisterPages />}/>
<Route path='/login' element={token ? <Navigate to="/" /> : <LoginPages />}/>
<Route path='/cart' element={<CartPages/>}/>

{/* redirige a una pizza en específico en unos de los desafios anteriores

<Route path='/pizza/p001' element={<PizzaPages/>}/>
*/}

<Route path='/profile' element={token ? <ProfilePages /> : <Navigate to="/login" />}/>
<Route path='/404' element={<NotFound/>}/>
<Route path="*" element={<NotFound />} />
<Route path="/pizza/:id" element={<Pizza />} />


</Routes>


<Footer></Footer>



    </>
  )
}

export default App
