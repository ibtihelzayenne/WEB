import React, { useState } from 'react';
import maison from './maison.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav style={{ padding: '0rem', backgroundColor: '#f3f1e0', color: 'black' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0rem', backgroundColor: '#e3a9ee', color: 'black' }}>
                <div>
                    {/* Logo */}
                    <img src="path-to-your-logo.png" alt="Logo" style={{ height: '40px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Icône de l'utilisateur */}
                    <img src="path-to-user-icon.png" alt="User" style={{ height: '40px', borderRadius: '50%', marginLeft: '1rem' }} />
                </div>
            </div>
            <div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
            <li>
          <Link to ="/" style={{ display :'flex',gap :'0.5rem',color: 'black' }}>
            <img 
              src={maison} // Utilisation de l'image importée
              alt="Acceuil"
              style={{ height: '20px', borderRadius: '0%', marginLeft: '1rem',marginTop: '0rem' }}
            />   Acceuil
          </Link>
        </li>
                <li style={{ position: 'relative' }}>
                    <Link
                        to="/"
                        style={{ color: 'black', cursor: 'pointer' }}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown();
                        }}
                    >
                        Mes études ▼
                    </Link>
                    {isDropdownOpen && (
                        <ul
                            className="dropdown"
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: '#444',
                                padding: '0.5rem',
                                listStyle: 'none',
                                margin: 0
                            }}
                        >
                            <li><Link to="/" style={{ color: 'white' }}>Emploi</Link></li>
                            <li><Link to="/" style={{ color: 'white' }}>Mes enseignants</Link></li>
                            <li><Link to="/"style={{ color: 'white' }}>Planning d'examen</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/contact" style={{ color: 'black' }}> Contact</Link></li>
                
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
