import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound.tsx'
import Snapshot from './pages/Snapshot.tsx'
import Layout from './layout/Layout.tsx'
import { Home } from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "snapshot/:id", element: <Snapshot />},
      { path: "*", element: <PageNotFound />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
