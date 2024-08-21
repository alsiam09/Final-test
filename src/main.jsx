import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './componat/ContextApi.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
createRoot(document.getElementById('root')).render(
  <ContextApi>
    <Provider store={store}>
    <App />
    </Provider>
  </ContextApi>
  )
