import React from 'react'
import {Link} from 'react-router-dom'

function Navbar (){
    return (
        <>
        <nav>
        <Link to='/'>Home </Link>
        <Link to='/city/:id'>Favourit city</Link>
        </nav>
      
        </>
    )
}
export default Navbar;