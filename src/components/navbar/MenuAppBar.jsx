import React from 'react';
import Header from './Header';

const sections = [
  {
    title: 'La vie du syndicat',
    slug: 'la-vie-du-syndicat',
  },
  {
    title: 'Le rucher ecole',
    slug: 'le-rucher-ecole',
  },
  { title: 'Actualités', slug: 'news' },
  { title: 'Utile', slug: 'utile' },
  {
    title: 'Petites annonces',
    slug: 'petites-annonce',
  },
];

const MenuAppBar = (props) => {
  return (
    <React.Fragment>
      <Header title='Le Syndicat Apicole Artésien' sections={sections} />
    </React.Fragment>
  );
};

export default MenuAppBar;
