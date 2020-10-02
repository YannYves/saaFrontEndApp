import axios from "axios";

import {
  API_URL_POST,
  API_URL_SIDEBAR,
  API_URL_FEATURED_POST,
  API_URL_MAIN_FEATURED_POST,
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
    const response = await axios.get("http://localhost:1337/mains");
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

const findOneSideBar = () => {
  return fetch(`${API_URL_SIDEBAR}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

const findOneFeaturedPost = (id) => {
  return fetch(`${API_URL_FEATURED_POST}/${id}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

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
  findOneSideBar,
  findOneFeaturedPost,
  findAllFeaturedPost,
  findAllMainFeaturedPost,
  findAllMainPost,
};
