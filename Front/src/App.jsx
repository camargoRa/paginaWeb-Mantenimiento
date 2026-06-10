import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Inicio from "./pages/Inicio"
import WhatsAppButton from "./components/ui/WhatsAppButton"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App