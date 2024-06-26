import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate();

    const { id } = useParams()

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

    useEffect(() => {
        loadUser();
    }, []);

    //Funtion to post to database
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data)
    }
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4' >Edit User</h2>
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
    );
}
