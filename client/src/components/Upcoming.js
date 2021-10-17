import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Movies.css'
import { FcRating,FcCalendar } from "react-icons/fc";
import {Link} from 'react-router-dom'
function Upcoming() {
      const  [movies,setMovies]=useState(null)
        useEffect(()=>{
        axios({method:'get',url:'https://api.themoviedb.org/3/movie/upcoming?api_key=3ddf74c2fd914358a950b0c65ea02906&language=en-US&page=1'})
            .then(res=>setMovies(res))
            .catch(err=>console.log(err))

        },[])

    return (
        <div className="upcoming">
            <h2>Upcoming Movies</h2>
            <div className="upcoming-movies-list">
            {movies && movies.data.results.map((item,index)=>{
                
                const img_link='https://image.tmdb.org/t/p/w200'+item.poster_path
                console.log(item)
                
                return(
                    <div className="movie-img">
                        <img src={img_link}></img>
                        <Link to={{pathname:"/details",state:{language:item.original_language,title:item.original_title,poster_path:item.poster_path,vote_count:item.vote_count,rdate:item.release_date,overview:item.overview}}}>{item.original_title}</Link>
                        <span><FcRating/> {item.vote_count}</span>
                        <div className="release-date"><span><FcCalendar/> {item.release_date}</span></div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Upcoming
