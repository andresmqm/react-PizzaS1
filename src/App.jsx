
import './App.css'
import CardPizza from './components/CardPizza'
import NavPizza from './components/Navbar'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {


  return (
    <>
    <NavPizza>
    </NavPizza>

    <Home></Home>

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


   <Footer></Footer>


    </>
  )
}

export default App
