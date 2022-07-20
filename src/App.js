import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import "./assets/variables/normalize/normalize.scss"
import "./app.scss"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
} 

export default App;
