import "./App.css";
import EmojiProvider from "../Components/EmojiProvider";
import AppRoutes from "../Components/AppRoutes";
import NavBar from "../Components/NavBar";
import UserProvider from "../Components/UserProvider";
import AppBarComponent from "../Components/AppBar";

function App() {
  return (
    <>
      <UserProvider>
        <EmojiProvider>
          <AppBarComponent></AppBarComponent>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
        </EmojiProvider>
      </UserProvider>
    </>
  );
}

export default App;
