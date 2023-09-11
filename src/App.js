import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <div className={'container-fluid'}>
                <Routes>
                    <Route path={''} element={<Login/>}></Route>
                </Routes>
            </div>
            <ToastContainer theme={"colored"} position={"top-center"} />
        </>
    );
}

export default App;
