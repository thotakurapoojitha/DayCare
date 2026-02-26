import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function AddDoctor() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
     const [gender, setGender] = useState('')
    const [salary, setSalary] = useState('')
     const [specialization, setSpecialization] = useState('')
     const navigate = useNavigate()
    

    function handleAddDoctor(e) {
        e.preventDefault()
        let newDoctor = {
            name:name,
            age:age,
            gender:gender,
            salary:salary,
            specialization:specialization
        }
        axios.post('https://doc-back.onrender.com/doctors', newDoctor)
           .then((res)=>{
            console.log(res.data)
            if(res.status === 201){
                alert('Doctor added successfully')
                navigate('/')
            }
           })
           .catch((err)=>{
            console.log(err)
           })
        console.log(name, age, gender, salary, specialization)
    }
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <form onSubmit={handleAddDoctor} className='col-12 col-md-6'>
                    <div className='mt-2'>
                        <h2>Add Doctor</h2>
                        
                    </div>
                    <div className="mt-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value) } />
                    </div>
                    <div className="mt-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" className="form-control" id="age" onChange={(e) => setAge(e.target.value) } />
                    </div>
                    <div className="mt-3">
                        <label for="gender" class="form-label">Gender</label>
                        <input type="text" className="form-control" id="gender" onChange={(e) => setGender(e.target.value) } />
                    </div>
                    <div className="mt-3">
                        <label for="salary" class="form-label">Salary</label>
                        <input type="number" className="form-control" id="salary" onChange={(e) => setSalary(e.target.value) } />
                    </div>
                    <div className="mt-3">
                        <label for="specialization" class="form-label">Specialization</label>
                        <input type="text" className="form-control" id="specialization" onChange={(e) => setSpecialization(e.target.value) } />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
