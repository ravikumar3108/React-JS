import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Usesta() {

  // Usenavigate :- 

  let navigate = useNavigate()

  let [intialvalue, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });



  // let [intialvalue1, setValue1] = useState()

  // Counter
  // function handlechange(){
  //   setValue(intialvalue*2)
  // }

  // function handleChange(e) {
  //   setValue({
  //     ...intialvalue,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  // function handleChange1(e){
  //     setValue1(e.target.value)
  // }


  function getData(){
    localStorage.setItem("Bhavesh",JSON.stringify(intialvalue))
    navigate("/login")
  }

  return (
    <>
      <div></div>
      <form action="" onSubmit={getData}>
        <h1>Signup</h1>
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
        <button type="submit"> Signup</button>
      </form>
    </>
  );
}

export default Usesta;
