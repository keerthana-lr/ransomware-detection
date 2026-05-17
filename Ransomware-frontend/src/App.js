import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Upload from "./Upload";
import Result from "./Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;