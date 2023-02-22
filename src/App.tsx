import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import { HOME_URL } from "./constants/URLConstants";
import useGlobalModal from "./hooks/useGlobalModal";
import Home from "./page/Home/Home";

const App = () => {
  const { modalState } = useGlobalModal();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
      </Routes>
      {modalState.isOpen && <Modal />}
    </BrowserRouter>
  );
};

export default App;
