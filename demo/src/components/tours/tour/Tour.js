import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { Link } from 'react-router-dom';
//import data from '../data/db.json'
//import {Routes ,Route} from "react-router-dom"
//import{useState} from 'react'
//import image from '../data/db.json'

function Tour(props) {
    return (
        <>
{/*             <Link to={`/city/${props.tour.id}`}>Show Details
 */}                <Card style={{ width: '18rem' }}>
                    <Card.Img variant={props.tour.name} src={props.tour.image} ></Card.Img>
                    <Card.Body>
                        <Card.Title>{props.tour.name}</Card.Title>
                        <Card.Text>
                            {props.tour.info}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
{/*             </Link>
 */}
        </>
    )
}

export default Tour;