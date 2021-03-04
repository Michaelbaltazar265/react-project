import React from 'react';


const Dropdown = ({options}) => { 

    const renderedOptions = options.map( (options) => { 
        return ( 
            <div key={options.value} className='item' >
                {options.label}
            </div>
        );
    });
    
    return ( 
        <div className='ui form'></div>
    )
};


export default Dropdown;