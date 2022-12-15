import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import KodegoGame from "./KodegoGame";
import Layout from "./Layout";
import Nopage from "./Nopage";
import Home from "./Home";
import AboutUs from "./AboutUs"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kodegoChess" element={<KodegoGame />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
