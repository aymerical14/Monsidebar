import React, {useState, useEffect} from 'react'
import "./Navbar.css"

export default function  Navbar() {

  return (
    <nav>
      <ul className="liste">
        <li className="items">Accueil</li>
        <li className="items">A propos</li>
        
      </ul>
      <button className='déconnecter'>Déconnecter</button>
    </nav>
  );
};


