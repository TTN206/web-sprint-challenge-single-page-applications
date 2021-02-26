import React from 'react';
import HomePage from './HomePage';
import NavBar from './Navigation';

export default function Header( props ){


  return(
    <div className="header">
      <NavBar />
      <HomePage />
    </div>
  );
}