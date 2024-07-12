import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"


function Homepage() {

  return (
    <>
      <div id="HomepageBG" className="flex flex-col-reverse p-0 landing-image bg-center">
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='absolute z-0 top-1/3 w-full bg-black bg-opacity-50 text-white title py-2 text-center'>Bruin SMV</motion.h1>
      </div>
    </>
  )
}

export default Homepage
