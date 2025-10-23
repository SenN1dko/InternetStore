import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow dark:bg-[var(--color-d-bg)] bg-[#f9fafb]  ">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
