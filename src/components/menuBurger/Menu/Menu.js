import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/la-vie-du-syndicat" tabIndex={tabIndex}>
        <span aria-hidden="true">🐝</span>
        La vie du syndicat
      </a>
      <a href="/le-rucher-ecole" tabIndex={tabIndex}>
        <span aria-hidden="true">👨‍🎓</span>
        Le rucher école
      </a>
      <a href="/news" tabIndex={tabIndex}>
        <span aria-hidden="true">📰</span>
        Actualités
      </a>

      <a href="/utile" tabIndex={tabIndex}>
        <span aria-hidden="true">🔨</span>
        Utile
      </a>
      <a href="/petites-annonce" tabIndex={tabIndex}>
        <span aria-hidden="true">🛒</span>
        petites annonces
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
