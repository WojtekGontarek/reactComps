import logo from './logo.svg';
import './App.css';
import RegForm from "./RegForm.js"
import RegFormWithRef from './RegFormWithRef.js';
import RegFormWithState from './RegFormWithState.js';

function App() {
  return (
    <>
      <RegFormWithState/>
      <hr/>
      <RegFormWithRef/>
      <hr/>
      <RegForm/>
    </>
  );
}

export default App;
