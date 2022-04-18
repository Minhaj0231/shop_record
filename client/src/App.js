import logo from "./logo.svg";
import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Items from "./pages/Items";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import Bills from "./pages/Bills";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LoggedInRoute><Homepage /></LoggedInRoute>} />
          <Route path="/items" element={<LoggedInRoute><Items /></LoggedInRoute>} />
          <Route path="/cart" element={<LoggedInRoute><CartPage /></LoggedInRoute>} />
          <Route path="/bills" element={<LoggedInRoute><Bills /></LoggedInRoute>} />
          <Route path="/customers" element={<LoggedInRoute><Customers /></LoggedInRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


export function LoggedInRoute({children}){
    if(localStorage.getItem('pos-user'))
    {
      return children
    }
    else{
      return <Navigate to='/login' />
    }

}