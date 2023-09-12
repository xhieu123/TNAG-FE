import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home/Home";

function App() {
    return (
        <>
            <div className={'container-fluid'}>
                <Routes>
                    <Route path={''} element={<Login/>}></Route>
                    <Route path={'home'} element={<Home/>}></Route>

                </Routes>
            </div>
        </>
    );
}

export default App;
