import React,{useState,useEffect} from 'react';
import './App.css';

function Program()
{
    const[value,UpdateValue]=useState(0);
    /*
        this.state={
            value:0
        }
    */
    useEffect(()=>{
        document.title=`Button has been clicked ${value} times`;
    });
    return(<div>
        <button type="button" onClick={()=>UpdateValue(value+1)}>Click to Increase</button>
        <p>{value}</p>
    </div>);
}
export default Program;