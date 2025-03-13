// import logo from './logo.svg';
import './App.css';
import ProductAdd from './components/ProductAdd';
import ProductView from './components/ProductView';
import ProductAdminRouter from './router/ProductAdminRouter';
// import ProductView from './components/ProductView';

function App() {
  return (
    <div className="App">
      <header>
      <h1> Admin app </h1>
      </header>
      <ProductAdminRouter/>
    </div>
  );
}

export default App;
