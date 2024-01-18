import React, { useState } from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error'
import Success from '../components/Success'
// Import your CSS file
import axios from "axios";

function Register() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const [loading,setloading]=useState(false);
    const[error,seterror]=useState();
    const[success,setsuccess]=useState();

   async function register() {
        if (password === cpassword) {
            const user = {
                name: name,
                email: email,
                password: password,
                cpassword: cpassword,
            }
            console.log(user);
            try{
                  setloading(true);
                     const result  =(await axios.post('http://localhost:5000/api/user/register',user)).data
                     console.log(result);
                     setloading(false);
                     setsuccess(true);

                     setname('');
                     setemail('');
                     setpassword('');
                     setcpassword('');
            }
            catch(error){
                setloading(false);
                seterror(true)
           console.log(error)
            }
            
            
        } else {
            alert('Passwords do not match');
        }
    }

    return (
        <>
           {loading &&(<Loader/>)}
           {error &&(<Error/>)}
           {success &&(<Success message="Registration Successfully"/>)}
        
        <div className="register-container">
           
            <div className="form-detail row mt-5">
                <div className="col-md-5">
                    <div className="form">
                        <div className="h1">
                            <b>
                                <h1>Register</h1>
                            </b>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                        />
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={cpassword}
                            onChange={(e) => {
                                setcpassword(e.target.value);
                            }}
                        />

                        <button className="btn btn-primary" onClick={register}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;