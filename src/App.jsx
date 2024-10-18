import WhatWeDo from "./Components/WhatWeDo/WhatWeDo"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
function App() {
  return (
    <>
     <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/" element={<WhatWeDo />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
