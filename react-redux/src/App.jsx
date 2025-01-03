import './App.css';
import { Counter } from './components/counter';
import ControlForm from './components/form/control-form'

function App() {
 
  return (
    <div className="App">
    <h1>Counter App</h1>
     <Counter />
     < ControlForm />
    </div>
  );
}

export default App;
