import React,{useState,useEffect}from 'react'
import { toast } from 'react-toastify';


export default function Register() {


    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            window.location.href="/home"
        }
    },[])

    const[user,setUser]=useState({
     username:"",
     email:"",
     password:""

    })
    const{username,email,password}=user;

    const getdata=(e)=>{
       const{name,value}=e.target;
       setUser({...user,[name]: value})
    }

    const signUp= async (e)=>{
       e.preventDefault();
       let item={username,email,password}
    
      let result=await fetch("http://localhost:4000/register",{
           method:"POST",
           headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
           },
           body:JSON.stringify(item)
           });
           result=await result.json();
           toast.success("user Registered succes fully ");
           console.log("result",result);
          localStorage.setItem("user-info",JSON.stringify(result));
       
           window.location.href="/home"
           
           setUser({  username:"",email:"",password:""})

    }

    

return (
        <div>
        
            <div className="container pt-5 pb-5 ">
                <div className="row">
                    <div className="col-md-6 col-12 mx-auto mt-5 mb-5 shadow-lg p-5 rounded contact">
                        <h2 className="text-center text-warning mb-4">User Registration Form</h2>
                            <form action="" onSubmit={(e)=>signUp(e)}>
                            <div className="form-group mb-4">
                                 <input type="text" name="username" id=""   
                                  placeholder="Enter your name .... "
                                 autoComplete="off"
                                  value={username}  onChange={getdata}
                                 className="form-control bg-transparent text-white" required />
                             </div>

                             <div className="form-group mb-4">
                                 <input type="emial" name="email" id="" 
                                  placeholder="Enter your email .... "
                                autoComplete="off"
                                  value={email}  onChange={getdata}
                                 className="form-control bg-transparent text-white" required />
                             </div>

                             <div className="form-group mb-4">
                                 <input type="password" name="password" id="" 
                                  placeholder="Enter your password .... "
                                  autoComplete="off"
                                  value={password} onChange={getdata}
                                 className="form-control bg-transparent text-white" required />
                             </div>

                             <div className="form-group mb-4">
                                 <button className="btn btn-outline-warning rouded w-100" >Register</button>
                             </div>
                            </form>

                            
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
