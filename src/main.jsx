import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import {CartProvider} from './contexts/CartContext.jsx';
// import { LogoutProvider } from './contexts/LogoutContext.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*  <LogoutProvider> */}
<UserProvider>
 <CartProvider>
    <BrowserRouter>
        <App />
   </BrowserRouter>
 </CartProvider>
</UserProvider>
 {/* </LogoutProvider> */}
  </StrictMode>,
)
