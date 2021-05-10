import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './store'
import { BrowserRouter } from 'react-router-dom'

const Provider = () => {

  const initialState = {
    user: { name: 'test' }
  }

  const [state, setState] = useState(initialState);

  const providerValue = useMemo(() => ({
    state,
    setState: ((updates) => {
      setState((prevState) => ({ ...prevState, ...updates }));
    })
  }), [state, setState]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={providerValue}>
        <Routes />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
