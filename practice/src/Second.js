import React from 'react'; 

const Second = () => { 

 let h3Style={
        color:"blue",
        fontWeight:"bold",
        border:"5px solid green",
        borderRadius:10,
        textAlign:"center",
        width:200
    }

    return (
        <div> 
            <h3 style={h3Style} >Here is the Second file we can add</h3>
        </div>
    )
};

export default Second;