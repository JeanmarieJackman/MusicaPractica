import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/PracticeLog">Log</NavLink>
          {/* <NavLink to="/contact">Contact</NavLink> */}
       </div>
    );
}
 
export default Navigation;