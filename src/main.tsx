import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './tags.css'
import Layout from './Layout.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Projects } from './Projects.tsx'
import ProjectView from './ProjectView.tsx'
import NotificationPage from '../1 - Notification Page/src/App.tsx'
import MultiStepForm from "../2 -Multistep Form/src/App.tsx"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>




    <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<App />} />

            <Route path="/projects" element={<ProjectView />}>
                  <Route path="/projects/1"  element={<NotificationPage />} />
                  <Route path="/projects/2"  element={<MultiStepForm />} />
            </Route>


        </Route>
    </Routes>
    

    </BrowserRouter>

  </React.StrictMode>,
)
