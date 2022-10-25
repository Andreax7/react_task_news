import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faFlask, faFutbol } from '@fortawesome/free-solid-svg-icons'
import { FaMedrt } from 'react-icons/fa'
import { RiComputerLine } from 'react-icons/ri'
import { IoNewspaperOutline } from 'react-icons/io5'

export default function Navigation({setNav, setMobNav, toggleMobNav}) {
  const [active, setActive] = useState(0);
  

  function showNav(){
    console.log(toggleMobNav);
    toggleMobNav ? setMobNav(false) : setMobNav(true) ;
  }

  function activity(section, k){
    setNav(section);
    setActive(k);
    toggleMobNav ? setMobNav(false) : setMobNav(true) ;
  } 
  

  return (
    
    <> 
      <div className="hamburger-lines">
        <button onClick={showNav} className="hamburger">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
        </button>
      </div>
     
      {toggleMobNav && 

              <div className='navBlock'>  
              <ul>
                <button className='navBtn' id={active === 0 ? "active" : undefined} active={(active===0).toString()} onClick={()=>activity('home',0)}>
                  <FontAwesomeIcon className='icon' icon={faHome} />
                    <h4 className="art"> Home</h4>
                </button>
              </ul>
              <ul>
                <button className='navBtn' id={active === 1 ? "active" : undefined} onClick={()=>activity('world',1)}>
                    <IoNewspaperOutline className='icon'/>
                      <h4 className="art"> General</h4>
                </button>
              </ul>
              <ul>
                <button className='navBtn' id={active === 2 ? "active" : undefined} onClick={()=>activity('business',2)}>
                  <FontAwesomeIcon icon={faSuitcase} className='icon'/>
                    <h4 className="art">Business</h4>
                </button>
              </ul>
              <ul>
                <button className='navBtn' id={active === 3 ? "active" : undefined} onClick={()=>activity('health',3)}>
                  <FaMedrt className='icon'/>
                    <h4 className="art">Health</h4> 
                </button>
              </ul>  
              <ul>
                <button className='navBtn' id={active === 4 ? "active" : undefined} onClick={()=>activity('science',4)}>
                  <FontAwesomeIcon icon={faFlask} className='icon'/>
                    <h4 className="art">Science</h4>
                </button>
              </ul>         
              <ul>
                <button className='navBtn' id={active === 5 ? "active" : undefined} onClick={()=>activity('sports',5)}>
                  <FontAwesomeIcon icon={faFutbol} className='icon'/>
                  <h4 className="art">Sports</h4>
              </button>
              </ul> 
              <ul>
                <button className='navBtn' id={active === 6 ? "active" : undefined} onClick={()=>activity('technology',6)}>
                    <RiComputerLine className='icon'/>
                    <h4 className="art">Technology</h4>
                </button> 
              </ul>
            </div> 
            
     }
    
    </>
  )
}
