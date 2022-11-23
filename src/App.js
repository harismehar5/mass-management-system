
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import {routes} from "./routes"
import Login from './pages/login/Login';
function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path="/admin" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
