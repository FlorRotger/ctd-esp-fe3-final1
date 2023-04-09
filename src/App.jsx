import { routes, Login } from "./navigation/Routes";
import {
  Outlet,
  useNavigate,
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoutes } from "./Components/ProtectedRoute";
import NewContextProvider from "./context/Context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <NewContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            //los de autocierre renderizan un elemento unico
            {routes.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NewContextProvider>
  );
}

export default App;
