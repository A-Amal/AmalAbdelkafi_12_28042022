import Header from './components/Header'
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './page/Home';
import {Route, BrowserRouter as Router, Navigate, Routes} from "react-router-dom";


function App() {
    return (

        <div className="App">
            <Header/>
            <main className="main">
                <Sidebar/>
                <Router>
                    <Routes>
                        <Route path="/" exact element={<Navigate replace to="/12"/>}/>
                        <Route path="/:id" exact element={<Home/>}/>
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
