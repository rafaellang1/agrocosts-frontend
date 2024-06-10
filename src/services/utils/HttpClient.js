class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    // return response.json();

    let responseBody = null;
    const contetType = response.headers.get('Content-Type');
    if (contetType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    return Promise.reject(new Error(`Request failed with status ${response.status}`));
  }

  async post(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;
    const contetType = response.headers.get('Content-Type');
    if (contetType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }
    return Promise.reject(new Error(`Requisicao falhou com o Status Code: ${response.status}`));
  }
}

export default HttpClient;
