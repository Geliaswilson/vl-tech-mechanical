import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import FormPage from "./pages/Formpage/Formpage";
import Header from "./components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
     <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/Form" element={<FormPage />} />
      <Route path="/services" element={<Services />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
