// Ваш файл с AppLayout
import { Routes, Route } from "react-router-dom";
import App from "../App"; // Ваш Layout
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import ROUTES from "../constants/Routes";

export const AppLayout = () => {
  return (
    <Routes>
      {/* 💡 ИЗМЕНИТЕ: Родительский маршрут должен быть просто "/" */}
      <Route path="/" element={<App />}>
        {/* Home - это индексный маршрут (по умолчанию) */}
        <Route index element={<Home />} />

        {/* Cart - дочерний маршрут, полный путь: /cart */}
        <Route path={ROUTES.CART} element={<Cart />} />
      </Route>
      {/* ⚠️ Добавьте Route для 404, чтобы поймать несоответствующие пути */}
      <Route path="*" element={<h1>404: Страница не найдена</h1>} />
    </Routes>
  );
};
