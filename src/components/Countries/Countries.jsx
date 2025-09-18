import React, { use } from 'react';
import Country from '../Country/Country'
import './Countries.css'

const Countries = ({countrriesPromise}) => {
    const countriesData=use(countrriesPromise);
    const countries=countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h2>Countires are {countries.length}</h2>
            <div className='countries'>
                {
                countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;