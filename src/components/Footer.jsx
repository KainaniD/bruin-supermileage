import { faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react'
import { motion } from 'framer-motion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <>
        <div className="mt-20 flex flex-col-reverse md:flex-row justify-around items-center gap-10 md:items-start w-full min-h-20 p-5 pb-20 bg-blue-900">
            <div className="flex flex-col gap-8">
                <h1 className="text-neutral-200 text-center footer-title">Address</h1>
                <p className='text-neutral-300 text-base footer-item'>Student Creativity Center,<br />Boelter Hall 2730A/B, UCLA, Los Angeles,<br />California 90095</p>
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-neutral-200 footer-title text-center">More of us</h1>
                <div className='flex flex-row justify-between gap-6'>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="mailto:smv@bruinracing.org/" target="_blank"><FontAwesomeIcon className='text-black social-item rounded-full bg-white' icon={faEnvelope} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black social-item rounded-full bg-white' icon={faInstagram} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black social-item rounded-full bg-white' icon={faLinkedin} /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 1 }}
                    className='flex justify-center'
                >
                    <a href="https://www.instagram.com/bruinsupermileage/" target="_blank"><FontAwesomeIcon className='text-black social-item rounded-full bg-white' icon={faTiktok} /></a>
                </motion.div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer