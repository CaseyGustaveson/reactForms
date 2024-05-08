import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignupForm'
import './App.css'



export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />      
      <Authenticate setToken={setToken} />
    </>
  );
}