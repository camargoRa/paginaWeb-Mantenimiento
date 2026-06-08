import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "./componets/Header"
import Pedido from "./componets/Pedido"
import Informacion from "./componets/Informacion"
import Footer from "./componets/Footer"
import Inicio from "./pages/Inicio"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Pedido" element={<Pedido />} />
        <Route path="/Informacion" element={<Informacion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App