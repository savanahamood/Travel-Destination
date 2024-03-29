
import { useState } from 'react';

import {useParams}  from 'react-router-dom';
import {Link} from 'react-router-dom';
import data from '../data/db.json'

function TourDetails() {
    const [readMore,setReadMore] =useState(false);
    let {id}=useParams();

    const result =data.filter((value)=> value.id ===id);
    return (
      <>

        <h2> {result[0].name} </h2>
        <p>
            {readMore
            ?`Description : ${result[0].info}` 
            : `Description : ${result[0].info.substring(0,200)} ...` }

            <button onClick = {()=> setReadMore(!readMore)}>
                {readMore ? "show less" :"show more"}
                </button>
               
               </p>
               <p> {result[0].price} </p>
                <img src={result[0].image}/>
     </>
        
    )
}
export default TourDetails;