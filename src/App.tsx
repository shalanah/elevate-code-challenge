import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import "./index.css";

function App() {
  return (
    <Router>
      <HomePage />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
