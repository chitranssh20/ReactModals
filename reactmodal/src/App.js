import { Modal } from "./Modal";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from "./Home";
import { Another } from "./Another";

function App() {
  return (
   <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element= { <Home />}  />
    <Route path="another/" element= { <Another />}  />
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
