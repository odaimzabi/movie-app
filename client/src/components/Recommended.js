import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {ApolloClient,InMemoryCache,gql,useMutation,useQuery } from '@apollo/client';
import './Movies.css'
import { FcRating,FcCalendar, FcCdLogo } from "react-icons/fc";
function Recommended(props) {
   
    //TODO fix query error
    //first we need to get tags to fetch request movies 
    // then we try to display them
    
      const  [movies,setMovies]=useState(null)
    
     const genres=[{
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }]
    const [id,setId]=useState(null)
    const SEARCH_USER=gql`

    query Users($userName:String!){
      Users(userName:$userName){
        userName
        tags
      }
    } 
    `
    let tags=""
    const userName=props.location.state.username
    
      const {error,data,loading}=useQuery(SEARCH_USER,{variables:{userName}})

      // if (!loading) console.log(data)
     useEffect(()=>{
       if (data) setId(data.Users.tags)
     },[data])
   
    useEffect(()=>{
    const fetchData= async ()=>{
      
     
    const res=await axios({method:'get',url:`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3ddf74c2fd914358a950b0c65ea02906&language=en-US&page=1`})
            setMovies(res)
    }
    fetchData()
  
    
      },[id])
  
     
  return (
      <div className="upcoming">
          <h2>Recommended For You</h2>
          <div className="upcoming-movies-list">
          {movies && movies.data.results.map((item,index)=>{
              const img_link='https://image.tmdb.org/t/p/w200'+item.poster_path
              return(
                  <div className="movie-img" key={index}>
                      <img src={img_link}></img>
                      <a href="#">{item.original_title}</a>
                      <span><FcRating/> {item.vote_count}</span>
                      <div className="release-date"><span><FcCalendar/> {item.release_date}</span></div>
                     
                  </div>
                  
              )
          })}
          </div>
      </div>
  )
  
}

export default Recommended
