import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/"><h1 className="app-name">Musica<b>Practica</b></h1></NavLink>
          {/* <NavLink to="/PracticeLog">Log</NavLink> */}
          {/* <NavLink to="/contact">Contact</NavLink> */}
       </div>
    );
}
 
export default Navigation;