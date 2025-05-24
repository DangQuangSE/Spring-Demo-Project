import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import TopNoticeBar from "./components/layout/TopNoticeBar";
import CategoryBar from "./components/layout/CategoryBar";
import Categories from "./pages/Categories";
import DoctorsList from "./pages/DoctorsList";
function AppContent() {
  const location = useLocation();
  const isCategoriesPage = location.pathname === "/categories";
  const isDoctorsListPage = location.pathname === "/doctors";
  return (
    <div className="min-h-screen w-full bg-primary">
      {!isCategoriesPage && !isDoctorsListPage && <TopNoticeBar />}
      <Navbar />
      {!isCategoriesPage && !isDoctorsListPage && <CategoryBar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
