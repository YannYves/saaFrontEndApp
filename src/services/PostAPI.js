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

const findAllPost = () => {
  return fetch(`${API_URL_POST}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

const findAllSideBar = () => {
  return fetch(`${API_URL_SIDEBAR}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

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

const findAllFeaturedPost = (id) => {
  return fetch(`${API_URL_FEATURED_POST}/${id}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

const findOneMainFeaturedPost = (id) => {
  return fetch(`${API_URL_MAIN_FEATURED_POST}/${id}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

const findAllMainFeaturedPost = (id) => {
  return fetch(`${API_URL_MAIN_FEATURED_POST}/${id}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

export default {
  findAllPost,
  findAllSideBar,
  findOnePost,
  findOneSideBar,
  findOneFeaturedPost,
  findAllFeaturedPost,
  findOneMainFeaturedPost,
  findAllMainFeaturedPost,
};
