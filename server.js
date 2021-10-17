const { ApolloServer } = require('apollo-server-express');
const { gql } = require('apollo-server-express');
const express=require('express')
const User=require('./User')
const mongoose=require('mongoose');
const app=express()


mongoose.connect('mongodb+srv://odaim:helloworld@cluster0-lulik.mongodb.net/odaim?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology:true})
    .then(console.log("mongodb connected"))

const typeDefs = gql`
    type User{

        firstName:String!
        lastName:String!
        userName:String!
        password:String!
        tags:String!
      
    }
    type Query{
        Users(userName:String!):User
    }
    type Mutation{
        addUser(firstName: String!,lastName: String!,userName: String!,password: String!,tags:String!):User
    }
`

const resolvers={
    Query:{
        Users:(username)=>User.findOne({username},function(err,docs){
            if (err) throw err;
            console.log(docs)
            if (docs==null){
                return null
            }else{
                return docs
            }
        })
        
    },
    Mutation:{
        addUser:async (root,args,context,info)=>{
            const newUser=new User(args)
            console.log(newUser)
             await newUser.save()
             return newUser
        }
    }
}

const server = new ApolloServer({ typeDefs,resolvers });
server.applyMiddleware({app})

app.listen(8000,()=>console.log('server running in port 8000'))