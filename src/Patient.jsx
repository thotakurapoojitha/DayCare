import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Patient() {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loadPatients()
  }, [])
  async function loadPatients() {
    await axios.get('https://doc-back.onrender.com/patients')
      .then((res) => {
        console.log(res.data)
        setPatients(res.data)
        setLoading(false)
      })
  }
  async function deletePatient(id) {
    await axios.delete(`https://doc-back.onrender.com/patients/${id}`)
      .then((res) => {
        console.log(res.data)
        loadPatients()
      })
  }
  return (
    <div>
      {
        loading ? (<p className='mt-5'>Loading...</p>) : (
          <div className='container mt-3'>
            <h1>Patients</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
              
              {
                patients.map((i) => (
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Problem: {i.problem}</h5>
                        <p className = "card-text">Name: {i.name}</p>
                        <p className = "card-text">Age: {i.age}</p>
                        <p className = "card-text">Gender: {i.gender}</p>
                        
                        <button className ='btn btn-danger' onClick={()=>deletePatient(i.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }

    </div>
  )
}
