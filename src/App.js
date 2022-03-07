import './App.css';
import { ColorChange } from './Components/ColorChange';
import Login from './Components/Login';
import Profile from './Components/Profile'
import {  useSelector } from 'react-redux'

function App() {
  const themeColor = useSelector((state) => state.theme.value)
  
  return (
    <div className="App" style={{color:themeColor.color,background:themeColor.background}}>
      <Profile />
      <Login />
    <ColorChange />
    </div>
  );
}

export default App;
