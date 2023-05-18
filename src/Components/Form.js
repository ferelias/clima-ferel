import React, { useState } from 'react';
import '../assets/css/form.css'

const Form = ({newLocation}) => {

    const [city, setCity] = useState("");

    const onSubmit = (e) => {
       e.preventDefault(); //Sirve para que no se actualice la pagina
       console.log({city});

       if('city' === "" || !city) return;

       newLocation(city);
    }

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='input-group mb-3 mx-auto'>
            <input type='text' className='form-control' id='consulteCiudad' placeholder='Consulte una ciudad' onChange={(e) => setCity(e.target.value)}></input>

            <button type="submit" className="btn btn-primary input-group-txt">Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default Form
