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
export default function StartRating({style={},totalStar=5,selectedStars=0,onRate=f=>f}){

    return (
        
        <div style= {{padding:"5px",...style}} >
        {createArray(totalStar).map((n,i)=>(
        <Star key={i} 
        selected={selectedStars>i}
        onSelect={()=>onRate(1+i)}
        
        />
        ))}
        <p>
            {selectedStars} of {totalStar} stars
        </p>
        </div>
        );
}