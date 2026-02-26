import React, { useState } from 'react'

export default function Doctor() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleDocotor(e) {
        e.preventDefault()
        console.log(email,password)
    }
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <form onSubmit={handleDocotor} className='col-12 col-md-6'>
                    <div className='mt-2'>
                        <h2>Doctor Login</h2>
                    </div>
                    <div className="mt-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value) } />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mt-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value) } />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
