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
  API_URL_MAIN_FEATURED_POST_NEWS,
  API_URL_FEATURED_POST_NEWS,
  API_URL_REGULAR_POST_NEWS,
  API_URL_REGULAR_ARTICLE_NEWS,
  API_URL_SIDEBAR_NEWS,
  API_URL_MAIN_FEATURED_POST_UTILS,
  API_URL_FEATURED_POST_UTILS,
  API_URL_REGULAR_POST_UTILS,
  API_URL_REGULAR_ARTICLE_UTILS,
  API_URL_SIDEBAR_UTILS,
  API_URL_MAIN_FEATURED_POST_ANNONCE,
  API_URL_FEATURED_POST_ANNONCE,
  API_URL_REGULAR_POST_ANNONCE,
  API_URL_REGULAR_ARTICLE_ANNONCE,
  API_URL_SIDEBAR_ANNONCE,
} from "../config";

const dataFetcher = async (endpoint, id = "") => {
  console.log(endpoint, id);
  try {
    const response = await axios.get(`${endpoint}/${id}`);

    return await response.data;
  } catch (error) {
    alert("An issue occurred while fetching data ");
  }
};

// HP

const findAllMainFeaturedPost = async () => {
  try {
    return await dataFetcher(API_URL_MAIN_FEATURED_POST);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const findAllFeaturedPost = async () => {
  try {
    return await dataFetcher(API_URL_FEATURED_POST);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const findAllPost = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchOnePost = async (id) => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST, id);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const findAllRegularArticles = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_ARTICLE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const findAllSideBar = async () => {
  try {
    return await dataFetcher(API_URL_SIDEBAR);
  } catch (error) {
    alert(error); // catches both errors
  }
};

// Rucher

const fetchMainFeaturedPostRucher = async () => {
  try {
    return await dataFetcher(API_URL_MAIN_FEATURED_POST_RUCHER);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchFeaturedPostsRucher = async () => {
  try {
    return await dataFetcher(API_URL_FEATURED_POST_RUCHER);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllPostRucher = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_RUCHER);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchOnePostRucher = async (id) => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_RUCHER, id);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllRegularArticlesRucher = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_ARTICLE_RUCHER);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchSidebarRucher = async () => {
  try {
    return await dataFetcher(API_URL_SIDEBAR_RUCHER);
  } catch (error) {
    alert(error); // catches both errors
  }
};

// Vie Syndic

const fetchMainFeaturedPostVie = async () => {
  try {
    return await dataFetcher(API_URL_FEATURED_POST_VIE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchFeaturedPostsVie = async () => {
  try {
    return await dataFetcher(API_URL_MAIN_FEATURED_POST_VIE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllPostVie = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_VIE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchOnePostVie = async (id) => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_VIE, id);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllRegularArticlesVie = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_ARTICLE_VIE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchSidebarVie = async () => {
  try {
    return await dataFetcher(API_URL_SIDEBAR_VIE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

// News

const fetchMainFeaturedPostNews = async () => {
  try {
    return await dataFetcher(API_URL_FEATURED_POST_NEWS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchFeaturedPostsNews = async () => {
  try {
    return await dataFetcher(API_URL_MAIN_FEATURED_POST_NEWS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllPostNews = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_NEWS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchOnePostNews = async (id) => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_NEWS, id);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllRegularArticlesNews = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_ARTICLE_NEWS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchSidebarNews = async () => {
  try {
    return await dataFetcher(API_URL_SIDEBAR_NEWS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

// Utils
const fetchMainFeaturedPostUtils = async () => {
  try {
    return await dataFetcher(API_URL_MAIN_FEATURED_POST_UTILS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchFeaturedPostsUtils = async () => {
  try {
    return await dataFetcher(API_URL_FEATURED_POST_UTILS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllPostUtils = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_UTILS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchOnePostUtils = async (id) => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_UTILS, id);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllRegularArticlesUtils = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_ARTICLE_UTILS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchSidebarUtils = async () => {
  try {
    return await dataFetcher(API_URL_SIDEBAR_UTILS);
  } catch (error) {
    alert(error); // catches both errors
  }
};

// Annonce

const fetchMainFeaturedPostAnnonce = async () => {
  try {
    return await dataFetcher(API_URL_MAIN_FEATURED_POST_ANNONCE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchFeaturedPostsAnnonce = async () => {
  try {
    return await dataFetcher(API_URL_FEATURED_POST_ANNONCE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchAllPostAnnonce = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_ANNONCE);
  } catch (error) {
    alert(error); // catches both errors
  }
};
const fetchOnePostAnnonce = async (id) => {
  try {
    return await dataFetcher(API_URL_REGULAR_POST_ANNONCE, id);
  } catch (error) {
    alert(error); // catches both errors
  }
};
const fetchAllRegularArticlesAnnonce = async () => {
  try {
    return await dataFetcher(API_URL_REGULAR_ARTICLE_ANNONCE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

const fetchSidebarAnnonce = async () => {
  try {
    return await dataFetcher(API_URL_SIDEBAR_ANNONCE);
  } catch (error) {
    alert(error); // catches both errors
  }
};

export default {
  findAllMainFeaturedPost,
  findAllFeaturedPost,
  findAllPost,
  fetchOnePost,
  findAllRegularArticles,
  findAllSideBar,

  fetchMainFeaturedPostRucher,
  fetchFeaturedPostsRucher,
  fetchAllPostRucher,
  fetchOnePostRucher,
  fetchAllRegularArticlesRucher,
  fetchSidebarRucher,

  fetchMainFeaturedPostVie,
  fetchFeaturedPostsVie,
  fetchAllPostVie,
  fetchOnePostVie,
  fetchAllRegularArticlesVie,
  fetchSidebarVie,

  fetchMainFeaturedPostNews,
  fetchFeaturedPostsNews,
  fetchAllPostNews,
  fetchOnePostNews,
  fetchAllRegularArticlesNews,
  fetchSidebarNews,

  fetchMainFeaturedPostUtils,
  fetchFeaturedPostsUtils,
  fetchAllPostUtils,
  fetchOnePostUtils,
  fetchAllRegularArticlesUtils,
  fetchSidebarUtils,

  fetchMainFeaturedPostAnnonce,
  fetchFeaturedPostsAnnonce,
  fetchAllPostAnnonce,
  fetchOnePostAnnonce,
  fetchAllRegularArticlesAnnonce,
  fetchSidebarAnnonce,
};
