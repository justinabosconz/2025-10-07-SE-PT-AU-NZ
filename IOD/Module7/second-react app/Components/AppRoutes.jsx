import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BitcoinRatesCombined from "./BitcoinRatesCombinedComponents";
import LoginForm from "./LoginForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/LoginForm" element={<LoginForm></LoginForm>}></Route>
      <Route
        path="/BitcoinRateExercises"
        element={<BitcoinRatesCombined></BitcoinRatesCombined>}
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
