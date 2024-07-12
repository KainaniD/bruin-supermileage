import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCarSide, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const desktopVariants = {
    open: { x: 0 },
    closed: { x: "80%" },
    hidden: { opacity: 0 },
    shown: { opacity: 1 },
    right: { scaleX: 1 },
    left: { scaleX: -1 }
}
const mobileVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
    // menuOpen: { height: "100%" },
    // menuClosed: { height: 0 }
}

const Navbar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const [menuActive, setMenuActive] = useState(false);


    const desktopNav = (
        <motion.nav
            animate={menuActive ? "open" : "closed"}
            variants={desktopVariants}
            className='hidden lg:flex flex-row gap-4 items-center text-nowrap'>
            <motion.div
                className={`flex flex-row gap-6 mr-4 ${menuActive ? 'opacity-0 pointer-events-none' : null}`}
                animate={menuActive ? "hidden" : "shown"}
                variants={desktopVariants}
            >
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-red-600 social-item bg-white' icon={faInstagram} /></a>
                </motion.div>
            </motion.div>
            <motion.button
                animate={menuActive ? "right" : "left"}
                variants={desktopVariants}
                className={`clickable`}
                onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon icon={faCarSide} />
                <FontAwesomeIcon icon={faChevronRight} />
            </motion.button>
            <motion.div
                animate={menuActive ? "shown" : "hidden"}
                variants={desktopVariants}
                className={`flex flex-row gap-4 items-center ${menuActive ? null : 'opacity-0 pointer-events-none'}`}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/our-team">Our Team</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/get-involved">Get Involved</Link>
            </motion.div>
        </motion.nav>
    )

    const mobileNav = (
        <nav
            className={`flex flex-col lg:hidden gap-4 items-end text-nowrap z-50`}>
            <button
                className={`clickable`}
                onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon className='p-1' icon={faBars} />
            </button>
        </nav>
    )



    return (
        <>
            <div className={`z-50 flex flex-row items-start w-full justify-between p-5 overflow-hidden bg-white bg-opacity-80 ${menuActive ? 'h-full lg:h-auto fixed' : 'absolute lg:fixed'}`}>
                <div className="flex flex-row gap-4 items-center">
                    <Link className='text-3xl lg:text-5xl nav-link' to="/" onClick={() => setMenuActive(false)}><span className="text-black">Bruin</span><br className={`lg:hidden`} /> <span className="text-amber-400">Supermileage</span></Link>
                </div>
                {desktopNav}
                {mobileNav}
            </div>
            <motion.div
                animate={menuActive ? "open" : "closed"}
                variants={mobileVariants}
                className={`z-50 mt-40 flex flex-col w-full gap-4 justify-center text-center ${menuActive ? 'fixed lg:hidden' : 'absolute lg:hidden'}`}>
                <Link className="nav-link" to="/" onClick={() => setMenuActive(false)}>Home</Link>
                <Link className="nav-link" to="/our-team" onClick={() => setMenuActive(false)}>Our Team</Link>
                <Link className="nav-link" to="/projects" onClick={() => setMenuActive(false)}>Projects</Link>
                <Link className="nav-link" to="/contact" onClick={() => setMenuActive(false)}>Contact</Link>
            </motion.div>
        </>
    );
}

export default Navbar