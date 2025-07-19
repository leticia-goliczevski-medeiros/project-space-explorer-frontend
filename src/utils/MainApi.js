const BASE_URL = "http://localhost:3000";

class MainApi {
  constructor({ makeRequest, headers }) {
    this._makeRequest = makeRequest;
    this._headers = headers;
  }

  login({ email, password }) {
    const endpoint = "signin";

    const requestOptions = {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    };

    return this._makeRequest(endpoint, requestOptions);
  }

  registerUser({ email, password }) {
    const endpoint = "signup";

    const requestOptions = {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    };

    return this._makeRequest(endpoint, requestOptions);
  }

  getUser(token) {
    const endpoint = "users/me";

    const requestOptions = {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    };

    return this._makeRequest(endpoint, requestOptions);
  }

  getUserGallery(token) {
    const endpoint = "users/me/gallery";

    const requestOptions = {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    };

    return this._makeRequest(endpoint, requestOptions);
  }

  addCardLike({ title, explanation, url, date }, token) {
    const endpoint = "users/me/gallery";

    const requestOptions = {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, explanation, url, date }),
    };

    return this._makeRequest(endpoint, requestOptions);
  }

  removeCardLike(cardId, token) {
    const endpoint = `users/me/gallery/${cardId}`;

    const requestOptions = {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    };

    return this._makeRequest(endpoint, requestOptions);
  }
}

export const mainApi = new MainApi({
  makeRequest: async (endpoint, requestOptions) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

      if (res.ok) {
        return res.json();
      }

      const errorData = await res.json();
      return Promise.reject(errorData.message || `Erro na requisição. ${res.status}`);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  headers: {
    "Content-Type": "application/json",
  },
});
