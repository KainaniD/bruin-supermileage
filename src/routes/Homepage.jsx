import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"


function Homepage() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("h1", {opacity: 1})
  })

  return (
    <>
    <div id="HomepageBG" ref={scope} className="flex flex-col-reverse p-0 landing">
      <motion.h1 className='absolute top-1/3 w-full bg-black bg-opacity-50 text-white title py-2 text-center'>Bruin SMV</motion.h1>
    </div>
    </>
  )
}

export default Homepage
