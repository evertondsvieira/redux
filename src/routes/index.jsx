import { Route, Routes } from "react-router-dom";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" />
        </Routes>
    )
}

export default Router;