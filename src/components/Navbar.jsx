import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="flex flex-row justify-between mb-5 p-5">
            <div className="flex flex-row gap-4 items-center">
                <Link className={`nav-link md:block ${menuActive ? 'hidden' : null}`} to="/">Bruin Supermileage</Link>
            </div>
            <div className={`flex flex-row gap-4 items-center transition-all ${menuActive ? null : 'translate-x-80'}`}>
                <button className={`text-neutral-300 text-5xl ${menuActive ? null : 'flipped'}`} onClick={() => setMenuActive(!menuActive)}><FontAwesomeIcon icon={faCarSide} /></button>
                <div className={`flex flex-row gap-4 items-center ${menuActive ? null : 'opacity-0'}`}>
                    <Link className="nav-link" to="/our-team">Our Team</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar