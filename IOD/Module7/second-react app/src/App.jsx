import "./App.css";
import EmojiProvider from "../Components/EmojiProvider";
import AppRoutes from "../Components/AppRoutes";
import NavBar from "../Components/NavBar";
import UserProvider from "../Components/UserProvider";
import DrawerAppBar from "../Components/AppBar";

function App() {
  return (
    <>
      <UserProvider>
        <EmojiProvider>
          <DrawerAppBar></DrawerAppBar>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
        </EmojiProvider>
      </UserProvider>
    </>
  );
}

export default App;
