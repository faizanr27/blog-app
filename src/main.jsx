import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Theme appearance="dark" accentColor="sky" grayColor="gray" radius="medium">
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Theme>
  </StrictMode>

)
