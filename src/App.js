import Header from './components/Header'
import './App.css';
import Sidebar from "./components/Sidebar";



function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
            <Sidebar />
        </main>


    </div>
  );
}

export default App;
