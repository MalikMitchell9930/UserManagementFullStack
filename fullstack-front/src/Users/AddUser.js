import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    const onInputChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        });

    };

    //Funtion to post to database
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4' >Register User</h2>
                    <form onSubmit={(event) => onSubmit(event)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Name
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Name'
                                name='name'
                                value={name}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Username"
                                name="username"
                                value={username}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                Email
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter Email'
                                name="email"
                                value={email}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>
                            Submit
                        </button>

                        <Link className='btn btn-outline-danger' to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
