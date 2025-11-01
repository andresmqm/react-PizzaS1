import React, {useState} from 'react';
import "./Register.css"

export default function Register() {

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [ConfirPassword, setConfirPassword] = useState()

    const passwordValid = "123456"
    const ConfirPasswordvalid = "123456"

    
    const onclickHandler = (event) =>{
        event.preventDefault()
        
        console.log({
            Email,
            Password,
            ConfirPassword
        })

        if(!Email|| !Password || !ConfirPassword){
            alert("todos los campos son obligatorio")
        
        }else if(Password.length <6){
            alert("El password debe tener al menos 6 caracteres")
        }

        else if(Password !== ConfirPassword){
            alert("Contraseñas no coinciden")

        }

        else if(Password === passwordValid && ConfirPassword === ConfirPasswordvalid){
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

    function onConfirPassword(event){
        setConfirPassword(event.target.value)
    }

  return (
    <>
        <h1>Login</h1>

        <form onSubmit={onclickHandler}>

    <div className='container'>

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

               <p>Confirm Password
                <br />
              <input 
             type="text"
              placeholder='Confirm Password'
              value={ConfirPassword} 
              onChange={onConfirPassword}
              />
               </p>   


    <button className='bg-primary p-2 text-white' type='submit' >Login</button>

    </div>

        </form>

    
    
    </>
  )
}
