import Tour from "./tour/Tour.js";
import React from "react";
import {Link} from 'react-router-dom'
//import data from '../data/db.json'

function Tours(props) {
    return (
        <>
            <h2>Tours list</h2>
            {props.arrayData.map((item) => {
                    return (
                        <div key={item.id}>
                        <Link to={`/city/${item.id}`}> <Tour tour={item}/> </Link>
                         </div>
                        //<Tour tour = {item}/>
                    )
                })
            }
        </>
    )
}
export default Tours;
{/* <Card style={{ width: '18rem' }}>
<Card.Img variant={item.name} src={item.image} />
<Card.Body>
  <Card.Title>{item.name}</Card.Title>
  <Card.Text>
  {item.info}
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}