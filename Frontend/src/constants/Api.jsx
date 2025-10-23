const BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  // Хорошая практика: выдавать ошибку, если переменная не найдена
  throw new Error("VITE_API_BASE_URL is not defined in the environment.");
}

export const API_CONFIG = {
  baseURL: BASE_URL,
  productsEndpoint: `${BASE_URL}/products`,
  productsEndpointId: (id) => `${BASE_URL}/products/${id}`,
};
