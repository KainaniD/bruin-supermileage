import { React } from 'react'
import { motion } from 'framer-motion';

const OurTeam = () => {
    return (
        <>
        <div id="OurTeamBG" className="flex flex-col-reverse p-0 landing bg-center">
        <motion.h1 
    initial={{ x: "-100%", opacity: 0}}
    animate={{ x: 0, opacity: 1}}
    transition={{ duration: 0.4 }}      
    className='absolute top-1/3 w-full bg-black bg-opacity-50 text-white title py-2 text-center'>Our Team</motion.h1>
        </div>
        </>
    );
}

export default OurTeam