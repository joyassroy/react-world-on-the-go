import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country.name.common)
    const [count, setCount] = useState(0);
    const clickHandle = () => {
        const cu = count + 1;
        setCount(cu);


    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={clickHandle}>
                {count % 2 == 0 ? "Not Visited" : "Visited"}
                    
                        
                
            </button>
        </div>
    );
};

export default Country;