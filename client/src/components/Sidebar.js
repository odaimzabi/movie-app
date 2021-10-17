
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import { NavBarItems } from './Navbaritems';
import { SiNetflix } from "react-icons/si";
function SideBar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


   
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
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <a to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
          <a href="#" style={{marginRight:"auto",marginLeft:"3rem",fontSize:"28px"}}>
            <SiNetflix style={{color:"#e8260b"}}/>
          </a>
        
          
          {props.username===""? 
              (<Link to="/login" style={{fontSize:"18px",textDecoration:"none",color:"white",marginRight:"2rem"}}>
                  Login
              </Link> 
              )
            :null
            }

    {props.username===""? 
              (<Link to="/signup" style={{fontSize:"18px",textDecoration:"none",color:"white"}}>
                  Sign up
              </Link> 
              )
            :null
            }
            {
              props.username!=""?(
                <Link to="/profile" style={{fontSize:"18px",textDecoration:"none",color:"white"}}>
                  {props.username}
                </Link>
              )
              :null
            }
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <a to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            
            {NavBarItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={{pathname:item.path,state:{username:props.username}}}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;