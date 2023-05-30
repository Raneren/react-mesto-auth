export const baseUrl = "https://auth.nomoreparties.co";

//Функция для проверки ответа
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  console.log(res);
  return Promise.reject(`Ошибка: ${res.status}`);
}
//Функция для регистрации
export const register = (password, email) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};
//Функция для авторизации
export const authorize = (password, email) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};
//Функция для проверки токена
export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
