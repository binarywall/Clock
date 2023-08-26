import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import router from './component/router'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
    <App />
  </RouterProvider>	
	// <React.StrictMode>
	// </React.StrictMode>
)