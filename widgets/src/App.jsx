import React, {useState} from 'react'; 
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
// import { useState } from 'react/cjs/react.development';


// const items = [ 
//     { 
//         title: "What is React?",
//         content: "React is a front end javascript framework"
//     }, 
//     { 
//         title: "Why use React?",
//         content: "React is a favorite JS library among engineers"
//     }, 
//     { 
//         title: "How do you React? ",
//         content: "You use React by creating components"
//     }
// ]

const options= [ 
    {
        label: 'The Color Red', 
        value: "red"
    }, 
    { 
        label: 'The Color Green', 
        value: 'green'
    },
    { 
        label: "A Shade of Blue", 
        value: 'blue'
    },
    { 
        label: "A Shade of Purple", 
        value: 'purple'
    }
]

 const App = () => { 
     const [selected, setSelected] = useState(options[0]);
    return ( 
        <div>
            < Dropdown 
            onSelectedChange={setSelected} 
            selected={selected} 
            options= {options}
            />
            {/* < Search /> */}
            {/* < Accordion items={items} /> */}
        </div>
    )
};

export default App;