"use client"
import React, { useState } from 'react'

function Products({naam}) {
var [a,b]=useState(false);
var [price,newprice]=useState(0)

const changeprice=()=>{

newprice(price+100);

}
  return ( <>
     <div  className='font-serif text-center text-5xl text-red-400'>Products  {naam}</div>
     <div>{a?'hello':'bye'}</div>
     <button className='bg-gray-500 text-2xl text-center  px-5 py-2 ml-96 rounded-full' onClick={()=>b(!a)}> btn</button>
     <div  className='font-serif text-center text-5xl text-red-400'> price :{price}</div>

     <button className='bg-gray-500 text-2xl text-center  px-5 py-2 ml-96 rounded-full' onClick={changeprice}> btn</button>
  </>
 


  )
}

export default Products