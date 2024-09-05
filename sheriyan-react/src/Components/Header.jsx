import React from 'react'

function Header(props) {
  return (
    <div>Header
        <h1> welcome {props.name}</h1>

        <a href="">About</a>
    </div>
  )
}

export default Header