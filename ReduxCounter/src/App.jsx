import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { byValue, decrement, increment, reset } from './Redux/features/CounterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
 
  const [Num, setNum] = useState(0)
  return (
   <div className="main h-screen w-full border-2 flex flex-col gap-3  justify-center items-center text-3xl">
  
  <h1 className='text-2xl'>Counter App Using Redux Toolkit</h1>
  
   <div className="card flex flex-col gap-5 items-center border-2 rounded-xl p-10">
    
    <h1 className='text-9xl font-bold'>{count}</h1>

    <div className='btn flex gap-4  '>
      <button 
      onClick={()=>[
        dispatch(increment())
      ]}
       className='active:scale-95 bg-blue-600 p-6 cursor-pointer rounded-xl font-bold text-white '>Increment</button>
      <button
      onClick={()=>{
        dispatch(decrement())
      }}
       className='active:scale-95 bg-blue-600 p-6 cursor-pointer rounded-xl font-bold  text-white '>Decrement</button>
    </div>

 <div className="Feild flex flex-col gap-5">
  <input 
  value={Num}
  onChange={(e)=>{
    setNum(e.target.value)
  }}
  className='p-5 border-2 border-gray-500 outline-none rounded-xl' type="number" />
  <button
  onClick={()=>{
    dispatch(byValue(Number(Num)))
  }}
   className='active:scale-95 bg-blue-600  p-6 cursor-pointer rounded-xl font-bold  text-white'>Incrase by {Num}</button>

   <button
   onClick={()=>[
    dispatch(reset())
   ]}
    className=' active:scale-95 bg-red-600  p-6 cursor-pointer rounded-xl font-bold  text-white'>Reset</button>
 </div>


   </div>
   </div>
  )
}

export default App
