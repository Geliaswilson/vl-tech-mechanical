import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";import Header from "./Components/Header/Header"

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
