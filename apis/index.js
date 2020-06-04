import { promisify } from "miniprogram-api-promise";
const request = promisify(wx.request);

const API = {
  login: "mplogin",
};

function getApi(baseUrl, api) {
  return `${baseUrl}\\${API[api]}`;
}

async function getGetResponse(baseUrl, api, data) {
  return request({
    url: getApi(baseUrl, api),
    method: "GET",
    data: data,
  });
}

async function getPostResponse(baseUrl, api, data) {
  return request({
    url: getApi(baseUrl, api),
    method: "POST",
    data: data,
  });
}

module.exports = {
  getApi: getApi,
  getGetResponse: getGetResponse,
  getPostResponse: getPostResponse,
};
