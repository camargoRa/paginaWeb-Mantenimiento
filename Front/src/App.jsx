import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "./componets/Header"
import Footer from "./componets/Footer"
import Inicio from "./pages/Inicio"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App