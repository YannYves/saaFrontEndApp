import React from "react";
import Header from "./Header";

const sections = [
  {
    title: "La vie du syndicat",
    url: "https://syndicat-apicole-artesien.com/la-vie-du-syndicat",
  },
  {
    title: "Le rucher ecole",
    url: "https://syndicat-apicole-artesien.com/le-rucher-ecole",
  },
  { title: "Actualités", url: "https://syndicat-apicole-artesien.com/news" },
  { title: "Utile", url: "https://syndicat-apicole-artesien.com/utile" },
  {
    title: "Petites annonces",
    url: "https://syndicat-apicole-artesien.com/petites-annonce",
  },
];

const MenuAppBar = (props) => {
  return (
    <React.Fragment>
      <Header title="Le Syndicat Apicole Artésien" sections={sections} />
    </React.Fragment>
  );
};

export default MenuAppBar;
