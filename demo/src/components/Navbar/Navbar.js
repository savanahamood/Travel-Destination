import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data/db.json'

function Navbar (){
    return (
        <>
        <nav>
        <Link to='/'>Home </Link>
        <Link to="/city">Favourit city</Link>
        </nav>
      
        </>
    )
}
export default Navbar;