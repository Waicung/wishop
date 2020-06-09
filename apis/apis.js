import { promisify } from "miniprogram-api-promise";
import ENV from "../env";
const request = promisify(wx.request);
const defaultServer = ENV.DEVELOPMENT_SERVER;

const API = {
  login: "mplogin",
  products: "products",
};

export default function getApi(api, baseUrl = defaultServer) {
  return `${baseUrl}\\${API[api]}`;
}

export async function getGetResponse(api, data, baseUrl = defaultServer) {
  return request({
    url: getApi(api, baseUrl),
    method: "GET",
    data: data,
  });
}

export async function getPostResponse(api, data, baseUrl = defaultServer) {
  return request({
    url: getApi(api, baseUrl),
    method: "POST",
    data: data,
  });
}

/* module.exports = {
  getApi: getApi,
  getGetResponse: getGetResponse,
  getPostResponse: getPostResponse,
}; */
