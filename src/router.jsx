import { createBrowserRouter, Outlet } from 'react-router-dom'
import Homepage from './routes/Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './routes/Contact.jsx'
import Projects from './routes/Projects.jsx'
import OurTeam from './routes/OurTeam.jsx'

const AppLayout = () => {

  return (<>
    <Navbar />
    <Outlet />
  </>)

}


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Homepage /> },
      { path: '/contact', element: <Contact />},
      { path: '/projects', element: <Projects />},
      { path: '/our-team', element: <OurTeam />},
    ]
  }
])