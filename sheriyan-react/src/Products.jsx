import React, { useState } from 'react'

function Products({naam}) {
var [a,b]=useState(false);

  return ( <>
     <div>Products  {naam}</div>
     <div>{a?'hello':'bye'}</div>
     <button className='bg-green-500 w-10 rounded' onClick={()=>b(!a)}> btn</button>
  </>
 


  )
}

export default Products