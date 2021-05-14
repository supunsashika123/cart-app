import { BASE_API_URL } from "../config";


export async function httpGenericGetRequest(params = null) {
  console.log(params.url);
  let token = localStorage.getItem("TOKEN")
  return fetch(params.url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(async (response) => {
      if (response.status === 401) {
        logout()
      }

      return response.json();
    })
    .then(async (responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export async function httpGetRequest(params = null) {
  console.log(BASE_API_URL + params.url);
  let token = localStorage.getItem("TOKEN")

  return fetch(BASE_API_URL + params.url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(async (response) => {
      if (response.status === 401) {
        logout()
      }

      return response.json();
    })
    .then(async (responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export async function httpDeleteRequest(params = null) {
  console.log(BASE_API_URL + params.url);
  let token = localStorage.getItem("TOKEN")

  return fetch(BASE_API_URL + params.url, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(async (response) => {
      if (response.status === 401) {
        logout()
      }

      return response.json();
    })
    .then(async (responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}


export async function httpPostRequest(params) {
  console.log(BASE_API_URL + params.url);
  let token = localStorage.getItem("TOKEN")

  return fetch(BASE_API_URL + params.url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(params.body),
  })
    .then(async (response) => {
      if (response.status === 401) {
        logout()
      }

      return response.json();
    })
    .then(async (responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export async function httpPutRequest(params) {
  console.log(BASE_API_URL + params.url);
  let token = localStorage.getItem("TOKEN")

  return fetch(BASE_API_URL + params.url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(params.body),
  })
    .then(async (response) => {
      if (response.status === 401) {
        logout()
      }

      return response.json();
    })
    .then(async (responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

function logout() {
  localStorage.clear()
  window.location.replace("/login")
}
