import { useState } from 'react'
import './App.css'
import { InputForm } from './components/InputForm'
import { SpecialVrata } from './SpecialVrata'
export const App = () => {
  const [specialVrata, setSpecialVrata] = useState(0);

  const clickSpecialVrata = () => {
    return specialVrata ? setSpecialVrata(0) : setSpecialVrata(1);
  }
  

  return (
    <>
      <h1 className="text-center my-4">Jiva Calendar</h1>
      <div className='mb-4'>
        <button className='btn btn-primary' onClick={clickSpecialVrata}>Get all special vrata</button>
        {specialVrata ? <SpecialVrata /> : "" }
      </div>
      <InputForm />
    </>
  )
}

export default App
