// import logo from './logo.svg';
import './App.css';
import Product from './components/Products';
import Header from './components/header/header';
function App() {
  
  return (
    <div >
      <Header 
        title="Header"
        name="Sachin"
      />

      <Product/>
    </div>
  );
}

export default App;
