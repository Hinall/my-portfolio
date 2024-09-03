import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b]=useState(0);
  return (<>
      <div className='bg-blue-300 w-1/2 '> App</div>
      <div>count:{a}</div>
      <button onClick={()=>b(a+1)} className='bg-green-300'>click</button>
      <Products naam={a}/>
  </>
  )
}

export default App