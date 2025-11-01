import React, {useState} from 'react'
import "./Login.css"

export default function Login() {

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const PasswordValid = "123456"

    const onclickHandler = (event) =>{
        event.preventDefault()
        
        console.log({
            Email,
            Password,

  })

  if(!Email|| !Password){
            alert("todos los campos son obligatorio")
        
        }else if(Password.length <6){
            alert("El password debe tener al menos 6 caracteres")
        
        }else if(Password === PasswordValid){
            alert("Exito! tus datos son correctos")

        }else{
            alert("Error, los datos son invalidos")
        }
    }


     function onEmail(event){
        setEmail(event.target.value)
    }

    function onPassword(event){
        setPassword(event.target.value)
    }




  return (
    <>

    <h1>Login</h1>

    <form onSubmit={onclickHandler}>

        <div>

            <p>Email
            <br />
        <input
            type="text" 
            placeholder='Enter your email' 
            value={Email}
            onChange={onEmail}
            />
        </p>

            <p>Password
                <br />
             <input 
             type="text"
              placeholder='Enter your passaword'
              value={Password} 
              onChange={onPassword}
              />
            </p>

            <button className='bg-primary p-2 text-white' type='submit' >Login</button>



        </div>

    
    </form>
  
    
    </>
    )
 }
