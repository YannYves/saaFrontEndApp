import axios from "axios";

import {
  API_URL_POST,
  API_URL_MAIN_POST,
  API_URL_SIDEBAR,
  API_URL_FEATURED_POST,
  API_URL_MAIN_FEATURED_POST,
  API_URL_MAIN_FEATURED_POST_RUCHER_ECOLE,
} from "../config";

const findOnePost = (id) => {
  return fetch(`${API_URL_POST}/${id}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

async function findAllPost() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_POST}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function findAllMainPost() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_MAIN_POST}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function findAllSideBar() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_SIDEBAR}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function findAllFeaturedPost() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_FEATURED_POST}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}
async function findAllFeaturedPostRucher() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(
      `${API_URL_MAIN_FEATURED_POST_RUCHER_ECOLE}`
    );
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function findAllMainFeaturedPost() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_MAIN_FEATURED_POST}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

export default {
  findAllPost,
  findAllSideBar,
  findOnePost,
  findAllFeaturedPost,
  findAllMainFeaturedPost,
  findAllMainPost,
  findAllFeaturedPostRucher,
};
