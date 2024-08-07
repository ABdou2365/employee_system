import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Wrapper from './components/ui/Container.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper className='container mx-auto pt-8'>
      <App />
    </Wrapper>

  </React.StrictMode>,
)
