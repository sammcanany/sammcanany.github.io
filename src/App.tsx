import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  Outlet
} from '@tanstack/react-router'
import { createHashHistory } from '@tanstack/react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-background -to-b from-gray-100 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})
const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/education',
  component: Education
})
const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: Experience
})
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects
})
const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skills',
  component: Skills
})
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact
})

// NotFound route: redirects to home for any unknown path
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => {
    window.location.hash = '#/'
    return null
  }
})

const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    educationRoute,
    experienceRoute,
    projectsRoute,
    skillsRoute,
    contactRoute,
    notFoundRoute
  ]),
  history: createHashHistory()
})

export default function App() {
  return <RouterProvider router={router} />
}