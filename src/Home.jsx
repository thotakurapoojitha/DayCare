import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loadDoctors()
  }, [])
  async function loadDoctors() {
    await axios.get('https://doc-back.onrender.com/doctors')
      .then((res) => {
        console.log(res.data)
        setDoctors(res.data)
        setLoading(false)
      })
  }
  async function deleteDoctor(id) {
    await axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
      .then((res) => {
        console.log(res.data)
        loadDoctors()
      })
  }
  return (
    <div>
      {
        loading ? (<p className='mt-5'>Loading...</p>) : (
          <div className='container mt-3'>
            <h1>Doctors</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
              
              {
                doctors.map((i) => (
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Specialization: {i.specialization}</h5>
                        <p className = "card-text">Name: {i.name}</p>
                        <p className = "card-text">Age: {i.age}</p>
                        <p className = "card-text">Gender: {i.gender}</p>
                        <p className = "card-text">Salary: {i.salary}</p>
                        <button className ='btn btn-danger' onClick={()=>deleteDoctor(i.id)}>Delete</button>
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
