
import React, { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'
const countrriesPromise=fetch('https://openapi.programming-hero.com/api/all')
  .then(res=>res.json())

function App() {
  

  return (
    <>

      <Suspense fallback={<p>nadir bhai loading</p>}>
        <Countries countrriesPromise={countrriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
