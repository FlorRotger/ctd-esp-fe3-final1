import { routes, Login } from "./navigation/Routes";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DarkThemeContext } from "./context/DarkThemeContext";
import { ProtectedRoutes } from "./Components/ProtectedRoute";
import NewContextProvider from "./context/Context";
import { NewContext } from "./context/Context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import FavContextProvider from "./context/FavContext";

function App() {
  const { isModoOscuro } = useContext(DarkThemeContext);

  return (
    <NewContextProvider>
      <FavContextProvider>
        <BrowserRouter>
          
          <div className={isModoOscuro ? "dark" : "app"}>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              //los de autocierre renderizan un elemento unico
              {routes.map(({ id, path, Component }) => (

                <Route key={id} path={path} element={<>
                <Navbar />
                <Component/>
                <Footer />
                </>  } />
              ))}
            </Route>
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
          </div>
        </BrowserRouter>
      </FavContextProvider>
    </NewContextProvider>
  );
}

export default App;
