import React, {useState, useEffect} from 'react'
import '../App.css'


 function Form() {

    const [myInput, setMyInput] = useState({})
    const [showMessage, setShowMessage] = useState(Boolean)    

    const handleInputChange = (e) => {
        e.preventDefault()
        setMyInput({
            ...myInput,[e.target.name] : [e.target.value]
        })
        
        //console.log(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setShowMessage(true)
        setTimeout(() => { setShowMessage(false) }, 5000)

        console.log(myInput)
    }

     return(
         <div className="container mt-4">
          <p  className="text-center h3">¡Hola, Bienvenido: {myInput.name}!</p>
             <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" 
                placeholder="Nombre"
                onChange={handleInputChange}
                name="name"
                className="form-control" 
                required />

                <label>Email</label>
                <input type="email" 
                placeholder="info@mail.co"
                onChange={handleInputChange}
                name="email"
                className="form-control" 
                required />

                <label>Celular</label>
                <input type="number" 
                placeholder="345234"
                onChange={handleInputChange}
                name="phone"
                className="form-control"
                required />

                <label>Edad</label>
                <input type="number" 
                placeholder="18"
                onChange={handleInputChange}
                name="age"
                className="form-control" 
                required />

                <div className="d-grid gap-2 col-6 mx-auto">
                <button 
                    type="submit"
                    className="btn btn-secondary btn-lg block shadow mt-3">Enviar</button>
                </div>

                {showMessage ? 
                <div className="alert alert-success d-flex align-items-center mt-2" role="alert">
                    <svg className="bi flex-shrink-0 me-2" style={{width: '24', height: '24', role: 'img'}} aria-label="Success:"><use href="#check-circle-fill"/></svg>
                    <div className="text-center">
                        <p>Tu información fue enviada con éxito, estaremos en contacto contigo.</p>
                        <p>Verifica en consola → </p>
                    </div>
                </div>  
                : ''}              
                
            </form>
         </div>
     )
 }

 export default Form;