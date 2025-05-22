import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './contextStore/StoreProvider.jsx'

createRoot(document.getElementById('root')).render(
  <>

    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </>,
)
