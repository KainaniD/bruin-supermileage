import { faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react'
import { motion } from 'framer-motion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <>
        <div className="mt-20 flex flex-row justify-around gap-10 items-start w-full min-h-20 p-5 pb-20 bg-blue-900">
            <div className="flex flex-col gap-8">
                <h1 className="text-neutral-200 footer-title">Address</h1>
                <p className='text-neutral-300 footer-item'>Student Creativity Center, <br />Boelter Hall 2730A/B, UCLA, Los Angeles, <br />California 90095</p>
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="text-neutral-200 footer-title">Email</h1>
                <a href="mailto:smv@bruinracing.org" className='flex items-center gap-4'>
                    <FontAwesomeIcon className='text-white text-5xl footer-item' icon={faEnvelope} />
                    <p className="text-blue-300 hover:underline">smv@bruinracing.org</p>
                </a>
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="text-neutral-200 footer-title">Socials</h1>
                <motion.div
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black footer-item rounded-full p-2 bg-white' icon={faInstagram} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black footer-item rounded-full p-2 bg-white' icon={faLinkedin} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black footer-item rounded-full p-2 bg-white' icon={faTiktok} /></a>
                </motion.div>
            </div>
        </div>
        </>
    );
}

export default Footer