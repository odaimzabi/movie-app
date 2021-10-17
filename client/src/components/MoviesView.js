import React,{useState} from 'react'
import axios from 'axios'
import Upcoming from './Upcoming'
import Popular from './Popular'
import Navbar from './Navbar'
import './Sidebar.css'
function MoviesView(props) {

    const [auth,setAuth]=useState(false)
    const username=""

    return (
        <div >
            <Navbar  username={typeof props.location.state!=="undefined"?props.location.state.username:""} />
            <Upcoming/>
            <Popular/>
        </div>
    )
}

export default MoviesView
