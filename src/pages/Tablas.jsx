import React, { useState } from 'react';
import Filas from '../components/Filas';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction, getByNameAction } from '../config/citasDuck'

export default function Tablas() {
  const dispatch = useDispatch();

  const [Nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  }



  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Apellido medico</th>
            <th scope="col">Apellido paciente</th>
            <th scope="col">Identifición paciente</th>
            <th scope="col">Estado cita</th>
          </tr>
        </thead>
        <tbody>
          <Filas />
        </tbody>
      </table>
      <div className="row ">
        <button onClick={() => dispatch(getAllAction())} className="btn btn-primary col">Get all</button>
        <div className="input-group mb-3 mt-4">
          <input type="text" className="form-control" placeholder="id del paciente"
            aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={(e) => handleChange(e)}
            value={Nombre}
          />
          <span className="btn btn-primary" id="basic-addon2"
            onClick={() => dispatch(getByNameAction(Nombre))}
          >
            Consultar por id del paciente</span>
        </div>
      </div>

    </div>
  )
}