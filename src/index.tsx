import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import {Provider} from 'react-redux'
import {setupStore} from './store/store'
import {BrowserRouter as Router} from 'react-router-dom'

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>
  </Provider>
);
