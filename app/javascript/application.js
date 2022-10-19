import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Greeting from "./controllers/components/Greeting";

const App = () => <Greeting />

ReactDOM.render(
       <Provider store={store}>
         <BrowserRouter>
           <App />
         </BrowserRouter>
       </Provider>, document.getElementById('root'))