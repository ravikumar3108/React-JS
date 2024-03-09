// import e from 'express';
import React ,{useState}from 'react'



function Login() {

    
  let [intialvalue, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  function loginData(e){
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem("Bhavesh"))
    console.log("UserDtaa",user)
    // if(){

    // }


  }



  return (
    <div>
       <form action="" onSubmit={loginData}>
        <h1>Login Form</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setValue({ ...intialvalue, [e.target.name]: e.target.value });
          }}
          name="username"
        /> <br />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setValue({ ...intialvalue, [e.target.name]: e.target.value });
          }}
          name="email"
        /> <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setValue({ ...intialvalue, [e.target.name]: e.target.value });
          }}
          name="password"
        /> <br />
        <button type="submit"> Login</button>
      </form>
    </div>
  )
}

export default Login
