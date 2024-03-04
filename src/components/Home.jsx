import React from "react";
import image from "./slider3.webp"
import Child1 from "./Child"
import Usesta from "./usestae";


function Home(){

     let name1 = "ravi"

    return(
        <>  
        <h1>Hoime</h1>
        {/* passing a props into the child component */}
        <Child1 name1 = {name1}/>
       <Usesta/>
        </>
    )
}
export default Home
