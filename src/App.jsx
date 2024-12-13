import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import MemberDetail from "./pages/member/MemberDetail";
import Member from "./pages/member/Member";
import Schedule from "./pages/schedule/Schedule";
import News from "./pages/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Guest routes */}
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Member />} />
          <Route path="/members/:name" element={<MemberDetail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />

          {/* Handle Pages Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
