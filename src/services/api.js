import urls from "../configs/urls";
import { convertObjectToQueryString } from "../utils/convert-object";

export const post = ({ api, model } = {}) => {
  return fetch(`${urls.endPointAdmin}${api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(model)
  });
};

export const get = ({ api, model } = {}) => {
  const query = convertObjectToQueryString(model);
  return fetch(`${urls.endPointAdmin}${api}?${query}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};

export const put = ({ api, model } = {}) => {
  const query = convertObjectToQueryString(model);
  return fetch(`${urls.endPointAdmin}${api}?${query}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(model)
  });
};
