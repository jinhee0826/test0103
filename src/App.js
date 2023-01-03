import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './page/Layout';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Product />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
