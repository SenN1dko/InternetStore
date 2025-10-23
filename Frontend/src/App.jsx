import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mb-[var(--classic-mb)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
