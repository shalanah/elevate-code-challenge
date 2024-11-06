import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <Router>
      <SkeletonTheme
        baseColor="var(--bg-main)"
        highlightColor="var(--bg-tertiary)"
      >
        <HomePage />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </SkeletonTheme>
    </Router>
  );
}

export default App;
