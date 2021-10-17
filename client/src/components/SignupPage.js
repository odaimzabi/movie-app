import React,{useState} from 'react'
import { Form, FormInput, FormGroup,Button,FormSelect} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {useForm} from 'react-hook-form'
import {CgProfile} from 'react-icons/cg'
import {ApolloClient,InMemoryCache,gql,useMutation } from '@apollo/client';

import {Redirect} from 'react-router-dom'

function SignupPage() {

   

    const {register,handleSubmit}=useForm()
    // const [auth,setAuth]=useState(false)
    const [userName,setUserName]=useState("")
    const ADD_USER=gql`
        mutation AddUser($firstName:String!,$lastName:String!,$userName:String!,$password:String!,$tags:String!){
            addUser(firstName:$firstName,lastName:$lastName,userName:$userName,password:$password,tags:$tags){
                firstName
                lastName
            }
        }
    `
    // client.query({
    //     query:gql`
    //             query getUsers($firstName:String,$lastName:String){
    //             Users{
    //             firstName
    //             lastName
    //             }
    //         }
        
    //     `
    // }).then(res=>console.log(res))
    //     .catch(e=>console.error(e))
    
    const [addUser,{data,error}]=useMutation(ADD_USER)
    const onSubmit= async (data)=>{
        await addUser({variables:{firstName:data.firstname,
            lastName:data.lastname,
            userName:data.username,
            password:data.password,
            tags:data.tag}})
            setUserName(data.username)
          
        
     }

     if (userName){
        console.log(true)
    return <Redirect to={{ pathname: "/",state: { username: userName }  }}/>

    }
    
    
   
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{marginTop:"5rem"}}>Create Your Account</h1>
    <div className="login-form"
         style={{
         display:"flex",
         flexDirection:"column",
         position:"absolute",
         top:"20%",
         bottom:"40%",
         transfom:"translate(-20%,-40%)",
         border:"1px solid #000",width:"500px",height:"550px",padding:"0px 40px",
         marginBottom:"4rem",
        borderRadius:"10px"}}

    >
   <span style={{textAlign:"center",marginRight:"2rem",fontSize:"30px"}} ><CgProfile/> </span>
<Form onSubmit={handleSubmit(onSubmit)} style={{marginBottom:"3rem"}}>
<FormGroup>
<label htmlFor="#firstname">First Name</label>
<FormInput  name="firstname" innerRef={register} id="#firstname" placeholder="First Name" />
</FormGroup>
<FormGroup>
<label htmlFor="#lastname">Last Name</label>
<FormInput id="#lastname" name="lastname" innerRef={register} placeholder="Last Name" />
</FormGroup>
<FormGroup>
<label htmlFor="#username">Username</label>
<FormInput  id="#username" name="username" innerRef={register} placeholder="Username" />
</FormGroup>
<FormGroup>
<label htmlFor="#password">Password</label>
<FormInput type="password" id="#password" name="password" innerRef={register} placeholder="Password" />
</FormGroup>

<FormGroup>
<label htmlFor="#select">Select your Genre</label>
<FormSelect id="#select" name="tag" innerRef={register}>
      <option value="28">Action</option>
      <option value="12">Adventure</option>
      <option value="16">Animation</option>
        
      
    </FormSelect>
</FormGroup>

<FormGroup>
<Button theme="success" type="submit">Sign up</Button>
</FormGroup>

</Form>
    </div>
</div>
    )
}

export default SignupPage
