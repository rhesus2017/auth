import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_URL } from "./constants/URLConstants";
import Home from "./page/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
