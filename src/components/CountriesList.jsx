import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div
      className="CountryList col"
      style={{ overflow: 'scroll', maxHeight: 90 + 'vh' }}
    >
      {props.countries.map((country) => (
        <Link key={country.cca3} to={`/${country.cca3}`}>
          {country.flag} {country.name.official}
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;
