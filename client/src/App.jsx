import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./views/Home";
import { Create } from "./views/Create";
import { Views } from "./views/Views";
import './App.css'
import { Update } from "./views/Edit";
import {BattlePage} from "./views/Battle"
import { MenuPage } from "./views/Menu"
import { GameOverScreen } from "./views/GameOver";
import { WinningScreen } from "./views/YouWin";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/RPGBattle" element={<Home />}/>
          <Route path="/RPGBattle/create" element={<Create />}/>
          <Route path="/RPGBattle/:id" element={<Views />}/>
          <Route path="/RPGBattle/:id/edit" element={<Update />} />
          <Route path="/RPGBattle/:id/battle" element={<BattlePage />} />
          <Route path="/RPGBattle/menu" element = {<MenuPage />} />
          <Route path="/RPGBattle/gameOver" element = {<GameOverScreen />} />
          <Route path="/RPGBattle/youWin" element = {<WinningScreen />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
