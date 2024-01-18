import React,{useState,useEffect} from 'react'

function Register() {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [cpassword,setcpassword]=useState('');

    function register(){
        if(password==cpassword){
            const user = {
                name:name,
                email:email,
                password:password,
                cpassword:cpassword
            }
            console.log(user)

        }
        else{
            alert('Passwords do not match')
        }
    }
  return (
    <div >
        <div classname="row  mt-5">
            <div className= "col-md-5">
              
                <div className='form'>
                    <div className="h1">
                        <b><h1>Register</h1></b>
                    </div>
                    <input type="text" className="form-control " placeholder="Username" value={name} onChange={(e)=>{
                        setname(e.target.value)
                    }}/>
                    <input type="email" className="form-control " placeholder="Email" value={email} onChange={(e)=>{
                        setemail(e.target.value)
                    }}/>
                    <input type="password" className="form-control " placeholder="password" value={password} onChange={(e)=>{
                        setpassword(e.target.value)
                    }}/>
                    <input type="password" className="form-control " placeholder="Confirm Password" value={cpassword} onChange={(e)=>{
                        setcpassword(e.target.value)
                    }}/>

                    <button className='btn btn-primary'onClick={register}>Register</button>
                </div>


            </div>
        </div>


    </div>
  )
}

export default Register