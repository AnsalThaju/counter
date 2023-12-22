import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:"100vh"}}>
      <div className='d-flex align-items-center justify-content-center p-5 rounded flex-column' style={{backgroundColor:"white"}}>
        <h3 className='text text-primary'>Counter Application</h3>
        <Counter/>
      </div>
    
     
    </div>
  );
}

export default App;
