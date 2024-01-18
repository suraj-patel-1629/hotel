import React ,{useState}from 'react'
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error'

function LoginScreen() {
    
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
     
    const [loading,setloading]=useState(false);
    const[error,seterror]=useState();
   async function Login() {
        const user = {
            email: email,
            password: password,
        }
        try{
            setloading(true);

            const result  =(await axios.post('http://localhost:5000/api/user/login',user)).data
            console.log(result);
            setloading(false);

            localStorage.setItem('currentUser',JSON.stringify(result));
            window.location.href='/home'
   }
   catch(error){
  console.log(error)
  setloading(false);
  seterror(true);
   }
    }
    
  return (
    <>
    {loading &&(<Loader/>)}
    <div className="register-container">
    <div className="form-detail row mt-5">
        <div className="col-md-5">
            <div className="form">
                {error &&(<Error message="invalid credential"/>)}
                <div className="h1">
                    <b>
                        <h1>Login</h1>
                    </b>
                </div>
                
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
               

                <button className="btn btn-primary" onClick={Login}>
                    Login
                </button>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default LoginScreen