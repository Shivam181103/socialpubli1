import "./App.css";
 import Home from "./components/Home/Home.jsx";
 import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
  Router,
} from "react-router-dom";
import Brandform from "./components/BrandForm/BrandForm";
import InfluencerForm from "./components/InfluencerForm/InfluencerForm";
import Construction from "./components/Construction";
 function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/brandform" element={<Brandform />} />
          <Route path="/influencerform" element={<InfluencerForm/>} />
          <Route path="/underconstruction" element={<Construction/>} />
            
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
