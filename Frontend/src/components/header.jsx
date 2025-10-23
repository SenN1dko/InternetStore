import { Link } from "react-router-dom";
import { ShoppingCart, Book } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import ROUTES from "../constants/Routes";
export const Header = () => {
  return (
    <>
      <header className="dark:bg-[var(--d-bg)] bg-gray-400  p-4 flex  transition-all ease-in duration-200  justify-between">
        <h1 className="text-xl  dark:text-[var(--d-text)] text-black font-bold">
          Мой магазин
        </h1>
        <nav className="flex items-center gap-6">
          <Link to={ROUTES.HOME}>
            <Book
              className="hover:rotate-15 transition-transform duration-333 ease-in"
              size={20}
            />
          </Link>
          <Link to={ROUTES.CART} className="flex relative">
            <ShoppingCart className="hover:rotate-15 transition-transform duration-333 ease-in" />
            <div className=" rounded-[100%] font-bold text-xs w-4.5 h-4 bg-yellow-300 text-black text-center left-3 bottom-4 absolute ">
              1
            </div>
          </Link>
          <ThemeSwitcher />
        </nav>
      </header>
    </>
  );
};
