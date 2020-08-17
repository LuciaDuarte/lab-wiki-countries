import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount(props) {
    this.loadCountry();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry(props) {
    const id = this.props.match.params.id;
    const country = this.props.countries.find((item) => item.cca3 === id);
    this.setState({
      country,
    });
  }

  render() {
    return (
      <div className="CountryDetails col">
        {this.state.country && (
          <>
            <h1>{this.state.country.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {this.state.country.borders.length > 0 && (
                  <>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul className="list-group-flush">
                          {this.state.country.borders.map((item) => (
                            <li className="list-group-item">
                              <Link key={item} to={`/${item}`}>
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetails;
