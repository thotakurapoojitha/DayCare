import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function AddPatient() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [problem, setProblem] = useState('')
    const navigate = useNavigate()


    function handlePatient(e) {
        e.preventDefault()
        let newPatient = {
            name: name,
            age: age,
            gender: gender,
            problem: problem
        }
        axios.post('https://doc-back.onrender.com/patients', newPatient)
            .then((res) => {
                console.log(res.data)
                if (res.status === 201) {
                    alert('Patient added successfully')
                    navigate('/')
                }
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(name, age, gender, problem)
    }
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <form onSubmit={handlePatient} className='col-12 col-md-6'>
                    <div className='mt-2'>
                        <h2>Add Patient</h2>
                    </div>
                    <div className="mt-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" className="form-control" id="age" onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="mt-3">
                        <label for="gender" class="form-label">Gender</label>
                        <input type="text" className="form-control" id="gender" onChange={(e) => setGender(e.target.value)} />
                    </div>

                    <div className="mt-3">
                        <label for="problem" class="form-label">Problem</label>
                        <input type="text" className="form-control" id="problem" onChange={(e) => setProblem(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
