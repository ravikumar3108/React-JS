import React, { useState } from 'react'

function Usesta() {

    let [intialvalue, setValue] = useState()
    let [intialvalue1, setValue1] = useState()

    // Counter 
    // function handlechange(){
    //   setValue(intialvalue*2)
    // }

    function handleChange(e){
        setValue(e.target.value)
    }
    function handleChange1(e){
        setValue1(e.target.value)
    }

  return (
    <div>
      {/* {intialvalue}

      <button onClick={handlechange}>Add</button> */}

      {intialvalue}
      {intialvalue1}
      <form action="">
        <input type="text" onChange={handleChange}/>
        <input type="text" onChange={handleChange1}/>
      </form>

    </div>
  )
}

export default Usesta
