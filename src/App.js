import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import HomeWithRouter from "./Pages/Home"
import AI from "./Pages/AI"

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<HomeWithRouter />}/>
                    <Route path="/AI" element={<AI />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;