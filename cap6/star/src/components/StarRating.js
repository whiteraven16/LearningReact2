import React,{useState} from "react";
import {FaStart} from "react-icons/fa";
import Star from "./Star";

/** 
export default function StartRating(){
    return [
        <FaStar color="red"/>
        <FaStar color="red"/>
        <FaStar color="red"/>
        <FaStar color="grey"/>
        <FaStar color="grey"/>
    ];
}
*/
const createArray=length=>[...Array(length)];
export default function StartRating({style={},totalStar=5,...props}){
    const [selectedStars,setSelectedStars]=useState(0);

    return (
        
        <div style= {{padding:"5px",...style}} {...props}>
        {createArray(totalStar).map((n,i)=>(
        <Star key={i} 
        selected={selectedStars>i}
        onSelect={()=>setSelectedStars(i+1)}
        />
        ))}
        <p>
            {selectedStars} of {totalStar} stars
        </p>
        </div>
        );
}