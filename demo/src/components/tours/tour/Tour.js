import TourDetails from "../../TourDetails/TourDetails";
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from 'react'

function Tour(props) {

    const [isLoggedIn, setLoggedin] = useState(false);
    const handleLoggin = () => {
        setLoggedin(!isLoggedIn)
    }
    return (
        <>

            <div key={props.tour.id}>

                <img src={props.tour.image} alt={props.tour.name} />
                <h4>{props.tour.name}</h4>
            </div>
        </>
    )
}





export default Tour;