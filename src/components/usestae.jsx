import React, { useState } from "react";

function Usesta() {
  let [intialvalue, setValue] = useState({
    name:""
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

  return (
    <>
      {intialvalue.first}
      {intialvalue.last}
      {intialvalue.password}
      {intialvalue.email}
      <div></div>
      <form action="">
        <input type="text" onChange={(e)=>{setValue({...intialvalue,[e.target.name]:e.target.value})}} name="first" />
        <input type="text" onChange={(e)=>{setValue({...intialvalue,[e.target.name]:e.target.value})}} name="last" />
        <input type="text" onChange={(e)=>{setValue({...intialvalue,[e.target.name]:e.target.value})}} name="password" />
        <input type="text" onChange={(e)=>{setValue({...intialvalue,[e.target.name]:e.target.value})}} name="email" />
        <input type="text" onChange={(e)=>{setValue({...intialvalue,[e.target.name]:e.target.value})}} name="phone" />
      </form>
    </>
  );
}



export default Usesta;
