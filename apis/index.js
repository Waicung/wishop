import { promisify } from "miniprogram-api-promise";
const request = promisify(wx.request);

const API = {
  login: "mplogin",
};

function getApi(baseUrl, api) {
  return `${baseUrl}\\${API[api]}`;
}

async function getGetResponse(baseUrl, api) {
  return request({
    url: getApi(baseUrl, api),
    methods: "GET",
  });
}

async function getPostResponse(baseUrl, api) {
  return request({
    url: getApi(baseUrl, api),
    methods: "POST",
  });
}

module.exports = {
  getApi: getApi,
  getGetResponse: getGetResponse,
  getPostResponse: getPostResponse
};
