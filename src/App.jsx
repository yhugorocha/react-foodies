import { Menubar } from "./components/Menubar/Menubar";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { ExploreFood } from './pages/ExploreFood/ExploreFood';
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/explore' element={<ExploreFood />}></Route>
      </Routes>
    </div>
  )
}
