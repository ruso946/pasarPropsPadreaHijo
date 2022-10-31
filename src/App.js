// import html2canvas from 'html2canvas';
import React, {useState} from 'react'
import Imgmeme from "./componentes/Imgmeme";
import Txtmeme from "./componentes/Textomeme";

const App = ()=>{
    return (
        <div className="App">
            <Imgmeme/>
            <Txtmeme/> 
            
        </div>
        
    )
}

export default App;