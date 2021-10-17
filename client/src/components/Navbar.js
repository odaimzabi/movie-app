import React,{useState} from 'react'
 import { SiNetflix } from "react-icons/si";

 import { Input,useDisclosure } from "@chakra-ui/core";
 import Sidebar from './Sidebar'
 import './Navbar.css'

function Navbar(props) {
        
        const [active,setActive]=useState(false)
        function keepStatusBar(){
            if (window.scrollY>=80){
                console.log()
                setActive(true)
            }else{
                setActive(false)
            }
        }
        window.addEventListener('scroll',keepStatusBar)
    return (
        <div>
            <nav>
            <Sidebar  username={props.username} />
            </nav>
        </div>
    )
}

export default Navbar
