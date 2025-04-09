import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './assets/context/UserContext.jsx'
import TaskProvider from './assets/context/TaskContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
<UserProvider>
  <TaskProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </TaskProvider>
  </UserProvider>
  </BrowserRouter>,
)
