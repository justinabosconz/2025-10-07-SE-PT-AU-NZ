import "./css/App.css";
import Favorite from "./pages/Favourites";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/favorites" element={<Favorite></Favorite>}></Route>
            <Route path="/LoginForm" element={<LoginForm></LoginForm>}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </UserProvider>
  );
}

export default App;
