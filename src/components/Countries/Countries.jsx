import React, { use, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'

const Countries = ({countrriesPromise}) => {
    const [count,setCount]=useState([]);
    const countriesData=use(countrriesPromise);
    const countries=countriesData.countries;
    const handleVisitedCountries=(cu)=>{
        // setCount(cu);
        if(count.find(cou=>(cou==cu))){
            let newVisited=[...count];
            newVisited=newVisited.filter(item => item !== cu);
            setCount(newVisited);
        }
        else {
        const newVisitedCountries=[...count,cu];
        setCount(newVisitedCountries);
        }

        // console.log(cu)
    }
    return (
        <div>
            <h2>Countires are {countries.length}</h2>
            <h2>Visited Countries Are {count.length}</h2>
            <div className='countries'>
                {
                countries.map(country=><Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;