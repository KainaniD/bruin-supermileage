import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCarSide, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const desktopVariants = {
    open: { x: 0 },
    closed: { x: "60%" },
    hidden: { opacity: 0 },
    shown: { opacity: 1 },
    right: { scaleX: 1 },
    left: { scaleX: -1 }
}
const mobileVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
    // menuOpen: { height: "100%" },
    // menuClosed: { height: 0 }
}

const Navbar = () => {
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
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-red-600 social-item rounded-full bg-white' icon={faInstagram} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-blue-800 social-item rounded-full bg-white' icon={faLinkedin} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black social-item rounded-full bg-white' icon={faTiktok} /></a>
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
                <Link className="nav-link" to="/designs">Designs</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </motion.div>
        </motion.nav>
    )

    const mobileNav = (
        <nav
            className={`flex flex-col lg:hidden gap-4 items-end text-nowrap`}>
            <button
                className={`clickable`}
                onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon className='p-1' icon={faBars} />
            </button>
            <motion.div
                animate={menuActive ? "open" : "closed"}
                variants={mobileVariants}
                className={`flex flex-col gap-4 items-right text-right ${menuActive ? null : 'hidden opacity-0 pointer-events-none'}`}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/our-team">Our Team</Link>
                <Link className="nav-link" to="/designs">Designs</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </motion.div>
        </nav>
    )



    return (
        <>
            <div
                className="absolute lg:fixed flex flex-row items-start w-full justify-between p-5 overflow-hidden bg-white bg-opacity-80">
                <div className="flex flex-row gap-4 items-center">
                    <Link className='text-3xl lg:text-5xl nav-link' to="/"><span className="text-black">Bruin</span><br className={`lg:hidden`} /> <span className="text-amber-400">Supermileage</span></Link>
                </div>
                {desktopNav}
                {mobileNav}
            </div>
        </>
    );
}

export default Navbar