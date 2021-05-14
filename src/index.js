import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './store'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const Provider = () => {

  const initialState = {
    user: { name: '' },
    cart: {}
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
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.Fragment>
    <Provider />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
