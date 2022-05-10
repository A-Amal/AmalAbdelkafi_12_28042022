import Header from './components/Header'
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './page/Home';



function App() {
  return (

        <div className="App">
            <Header/>
            <main className="main">
                <Sidebar />
                <Home />
            </main>
        </div>


  );
}

export default App;
