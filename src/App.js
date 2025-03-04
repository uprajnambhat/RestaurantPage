import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MainDishes from "./components/MainDishes";
import BreakFastItems from "./components/BreakFastItems";
import Dessert from "./components/Dessert";
import BrowseAll from "./components/BrowseAll";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Menu/MainDishes" element={<MainDishes />}></Route>
        <Route path="/Menu/BreakFastItems" element={<BreakFastItems />}></Route>
        <Route path="/Menu/DessertMenu" element={<Dessert />}></Route>
        <Route path="/Menu/BrowseAll" element={<BrowseAll />}></Route>
        {/* Redirect invalid paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
