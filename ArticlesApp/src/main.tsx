import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { AppProvider } from './contexts/app.context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
