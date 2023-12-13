// 368
const baseUrl = process.env.REACT_APP_API_URL;

// 368
const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  console.log("url", url);

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

// 363
const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    console.log("fetch con token", url, method, token);
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    console.log("fetch con token", url, method, token);
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};

export { fetchSinToken, fetchConToken };
