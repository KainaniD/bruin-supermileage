import { createBrowserRouter, Outlet } from 'react-router-dom'
import Homepage from './routes/Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './routes/Contact.jsx'
import Designs from './routes/Designs.jsx'
import OurTeam from './routes/OurTeam.jsx'
import Footer from './components/Footer.jsx'

const AppLayout = () => {

  return (<>
    <Navbar />
    <Outlet />
    <Footer />
  </>)

}


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Homepage /> },
      { path: '/contact', element: <Contact />},
      { path: '/designs', element: <Designs />},
      { path: '/our-team', element: <OurTeam />},
    ]
  }
])