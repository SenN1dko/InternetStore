import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
