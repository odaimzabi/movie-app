import React,{useState} from 'react'
import './Details.css'
import { FcRating,FcCalendar } from "react-icons/fc"
import Navbar from './Navbar'
function Details(props){
    const {poster_path,vote_count,rdate,overview,title,language}=props.location.state;
    console.log(poster_path,vote_count,rdate,overview,title)
    const img_link='https://image.tmdb.org/t/p/w300'+poster_path
    return(
        <div className="main-div">
            <Navbar/>
            <h1>More Details</h1>
        <div className="Details">
        <div className="img-div">
            <img src={img_link}></img>
        </div>
        <div className="content">
            <h2>{title}</h2>
            <div className="release-date">
            <span>Release Date: {rdate}</span>
            </div>
            <div className="vote-count">
            <span>Vote Count: {vote_count}</span>
            </div>
            <div className="language">
               <span>Language:{language=="en"?<span>English</span>:<span>JA</span>}</span>
            </div>
            <p>{overview} </p>
            
        </div>
        </div>
        </div>
    )


}


export default Details