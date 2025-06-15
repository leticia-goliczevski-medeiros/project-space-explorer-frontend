const apiKey = 'DEMO_KEY';

class APODApi {
  constructor({ makeRequest }) {
    this._makeRequest = makeRequest;
  }

  getAllPhotos(startDate, endDate) {
    const endpoint = `&start_date=${startDate}&end_date=${endDate}`;

    return this._makeRequest(endpoint)
  }

  getCurrentPhoto() {
    const endpoint = '';

    return this._makeRequest(endpoint)
  }
}

export const api = new APODApi({
  makeRequest: async (endpoint)=> {
    try {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}${endpoint}`);

      if (res.ok) {
        return res.json();
      }

      try {
        const errorData = await res.json();
        return Promise.reject(errorData.message || `Erro na requisição. ${res.status}`);
      } catch {
        const errorText = await res.text();
        return Promise.reject(`Erro na requisição. ${res.status}: ${errorText}`);
      }

    } catch (error) {
      return Promise.reject(error);
    }
  }
});