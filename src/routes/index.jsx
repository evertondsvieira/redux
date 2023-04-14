import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default Router;