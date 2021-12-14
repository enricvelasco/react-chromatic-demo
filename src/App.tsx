import logo from './logo.svg'
import './App.css'
import Button from "./ui/atoms/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Include Chromatic</p>
        <Button type={'primary'} label={'primary'} />
        <Button type={'default'} label={'outline'} />
        <Button type={'dashed'} label={'dashed'} />
      </header>
    </div>
  )
}

export default App
