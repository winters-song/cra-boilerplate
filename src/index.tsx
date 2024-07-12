import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from "antd";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

const baseName = ""


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider theme={{
    token: {
      // Seed Token，影响范围大
      colorPrimary: '#5700ff',
    },
    // components: {
    //   Button: {
    //     colorPrimary: '#5700ff',
    //     algorithm:true
    //   },
    //   Input: {
    //     colorPrimary: '#eb2f96',
    //   }
    // },
  }}>
    <ReduxProvider store={store}>

      <BrowserRouter basename={baseName}>
        <Routes />
      </BrowserRouter>
    </ReduxProvider>
  </ConfigProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
