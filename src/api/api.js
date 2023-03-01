import axios from 'axios';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const usersApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
  params: {
    client_id: githubClientId,
    client_secret: githubClientSecret,
  },
});

const reposApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
  params: {
    client_id: githubClientId,
    client_secret: githubClientSecret,
    per_page: 5,
    sort: "updated:asc",
  },
});

export { usersApi, reposApi };
