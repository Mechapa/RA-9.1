import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const activeClass = ({ isActive }) =>
    isActive ? "menu__item menu__item-active " : "menu__item";
  return (
    <div className='menu'>
      <NavLink className={activeClass} to='/'>Home</NavLink >
      <NavLink className={activeClass} to='/drift'>Drift</NavLink>
      <NavLink className={activeClass} to='/timeattack'>Time Attack</NavLink>
      <NavLink className={activeClass} to='/forza'>Forza</NavLink>
    </div>
  );
}