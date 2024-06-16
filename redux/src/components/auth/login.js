import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
const initialSate = {
    email: "",
    password: ""
}
function Login() {
    const [formValue, setFormvalue] = useState(initialSate)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        let formData = { ...formValue, [name]: value }
        setFormvalue(formData)
    }
    const { email, password } = formValue
    const handleSubmit = (e) => {
    }
    return (
        <div className="container">
            <div className='row'>
                <form>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name='email'
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name='password'
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Login;