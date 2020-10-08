import axios from "axios";

import {
  API_URL_MAIN_FEATURED_POST,
  API_URL_FEATURED_POST,
  API_URL_REGULAR_POST,
  API_URL_REGULAR_ARTICLE,
  API_URL_SIDEBAR,
  API_URL_MAIN_FEATURED_POST_RUCHER,
  API_URL_FEATURED_POST_RUCHER,
  API_URL_REGULAR_POST_RUCHER,
  API_URL_REGULAR_ARTICLE_RUCHER,
  API_URL_SIDEBAR_RUCHER,
  API_URL_MAIN_FEATURED_POST_VIE,
  API_URL_FEATURED_POST_VIE,
  API_URL_REGULAR_POST_VIE,
  API_URL_REGULAR_ARTICLE_VIE,
  API_URL_SIDEBAR_VIE,
} from "../config";

// HP

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

async function findAllPost() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_REGULAR_POST}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function findAllRegularArticles() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_REGULAR_ARTICLE}`);
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

// Rucher

async function fetchMainFeaturedPostRucher() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_MAIN_FEATURED_POST_RUCHER}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchFeaturedPostsRucher() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_FEATURED_POST_RUCHER}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchAllPostRucher() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_REGULAR_POST_RUCHER}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchAllRegularArticlesRucher() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_REGULAR_ARTICLE_RUCHER}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchSidebarRucher() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_SIDEBAR_RUCHER}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

// Vie Syndic

async function fetchMainFeaturedPostVie() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_FEATURED_POST_VIE}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchFeaturedPostsVie() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_MAIN_FEATURED_POST_VIE}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchAllPostVie() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_REGULAR_POST_VIE}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchAllRegularArticlesVie() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_REGULAR_ARTICLE_VIE}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

async function fetchSidebarVie() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${API_URL_SIDEBAR_VIE}`);
    let data;
    return (data = await response.data);
  } catch (error) {
    alert(error); // catches both errors
  }
}

export default {
  findAllMainFeaturedPost,
  findAllFeaturedPost,
  findAllPost,
  findAllRegularArticles,
  findAllSideBar,

  fetchMainFeaturedPostRucher,
  fetchFeaturedPostsRucher,
  fetchAllPostRucher,
  fetchAllRegularArticlesRucher,
  fetchSidebarRucher,

  fetchMainFeaturedPostVie,
  fetchFeaturedPostsVie,
  fetchAllPostVie,
  fetchAllRegularArticlesVie,
  fetchSidebarVie,
};
