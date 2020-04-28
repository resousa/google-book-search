import React from "react";
import SearchForm from "../SearchForm";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function SearchJumbotron(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Find Books</h1>
        <p>
          Create your own personal reading list! All you have to do is search
          for a book and save it for later!
        </p>
        <SearchForm {...props} />
      </Container>
    </Jumbotron>
  );
}
export default SearchJumbotron;
