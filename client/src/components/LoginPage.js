import React from 'react'
import { Form, FormInput, FormGroup,Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {CgProfile} from 'react-icons/cg'
function LoginPage() {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{marginTop:"8rem"}}>Login Into Your Account</h1>
            <div className="login-form"
                 style={{
                 display:"flex",
                 flexDirection:"column",
                 position:"absolute",
                 top:"30%",
                 bottom:"30%",
                 transfom:"translate(-30%,-30%)",
                 border:"1px solid #000",padding:"10px 100px ",
                borderRadius:"10px"}}

            >
           <span style={{textAlign:"center",marginRight:"2rem",fontSize:"30px"}} ><CgProfile/> </span>
        <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
      <Button theme="success" type="submit">Login</Button>
      </FormGroup>
    </Form>
            </div>
        </div>
    )
}

export default LoginPage
