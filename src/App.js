import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
