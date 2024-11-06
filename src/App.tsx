import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetails } from "./pages/UserDetails";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <Router>
      <SkeletonTheme
        baseColor="var(--bg-main)"
        highlightColor="var(--bg-tertiary)"
      >
        <Home />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/:id" element={<UserDetails />} />
        </Routes>
      </SkeletonTheme>
    </Router>
  );
}

export default App;
