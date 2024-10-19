import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
     <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Homepage />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
