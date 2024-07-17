import logo from './logo.svg';
import './App.css';
import { Button, InputTextField } from '@ppulashkar/dhre-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button label={'Click Me'}></Button>
        <InputTextField label={'UserName'} variant={'outlined'}></InputTextField>
      </header>
    </div>
  );
}

export default App;
