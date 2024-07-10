import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from "antd";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const baseName = ""


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider>
    <BrowserRouter basename={baseName}>
      <Routes />
    </BrowserRouter>
  </ConfigProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
