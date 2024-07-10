import { createBrowserRouter, Outlet } from 'react-router-dom'
import App from './App.jsx'
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
      { path: '', element: <App /> },
      { path: '/contact', element: <Contact />},
      { path: '/projects', element: <Projects />},
      { path: '/our-team', element: <OurTeam />},
    ]
  }
])