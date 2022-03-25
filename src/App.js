import './App.css';
import { Route } from 'react-router-dom';

//?Header Component
import Header from "./components/Header/Header";
//? Home Page Component
import Home from "./pages/home/Home";




function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path = '/' component={Home} />

    </div>
  );
}

export default App;
