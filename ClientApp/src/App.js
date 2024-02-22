import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FetchData from "./components/FetchData";

import Update from "./components/Update";
import PostDealer from "./components/PostDealer"






function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FetchData  />}></Route>
                    <Route path="/post" element={<PostDealer />}></Route>
                    <Route path="/update/:id" element={<Update />}></Route>
                </Routes>
            </BrowserRouter>

          
     
        </div>
        )
}

export default App;
