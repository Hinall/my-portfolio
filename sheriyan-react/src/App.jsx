import React, { useState } from 'react'
import Header from '../Components/Header'


function App() {
  const [user,userfn]=useState("hinal");
  return (<>
  app
  <Header name={user} />
 
  </>
  )
}

export default App