import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Filas() {

  const citas = useSelector(store => store.citasStore.citas.lista);

  return (

    <>
      {
        citas.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index}</th>
            <td>{item.apellidosMedico}</td>
            <td>{item.apellidosPaciente}</td>
            <td>{item.idPaciente}</td>
            <td>{item.estadoReservaCita}</td>
          </tr>
        ))
      }
    </>

  )
}