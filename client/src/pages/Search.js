import React from "react";
import SearchJumbotron from "../components/SearchJumbotron";
import ResultsJumbotron from "../components/ResultsJumbotron";
import API from "../utils/API";
class Search extends React.Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    this.setState({ results: {}, search: "" });
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  bookSearch = (event) => {
    event.preventDefault();

    API.getBookTitle(this.state.search)
      .then((results) => this.setResults(results))
      .catch((err) => console.log(err));
  };
  setResults = (data) => {
    this.setState({ results: data.data.items });
  };

  render() {
    return (
      <div>
        <SearchJumbotron
          name="search"
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          bookSearch={this.bookSearch}
        />
        <ResultsJumbotron results={this.state.results} /> 
      </div>
    );
  }
}
export default Search;


