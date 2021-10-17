
import React,{useState} from 'react'
import axios from 'axios'


function GetId(){
    const [id,setId]=useState(null)
    const SEARCH_USER=gql`

    query Users($userName:String!){
      Users(userName:$userName){
        tags
      }
    } 
    `
    let tags=""
    const userName=props.location.state.username
    
      const {error,data,loading}=useQuery(SEARCH_USER,{variables:{userName}})

      if (!loading) console.log(data)

      useEffect(()=>{
        if (data){
      data.Users.forEach(item=>{
          tags=item.tags;
          console.log(tags)
      })
        }
    },[data])
   
    
     
    
    useEffect(()=>{
  const getId=()=>{
          
    genres.map(item=>{
      if (item.name==tags){
        console.log("hello")
        setId(item.id)
      }
      getId()
    
  },[])
        
}


export default GetId