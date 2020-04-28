import React from "react";
import API from "../../utils/API";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'

function Results(props) {
  return (
    <Jumbotron>
      <Container>
        <h1>Search Results</h1>
        {props.results.length > 0 ? (
          props.results.map((book) => (
            <Card key={book.id}>
              <Card.Header>
                <Row><h5>
                {book.volumeInfo.title} </h5></Row>
                <Row>
                By: {book.volumeInfo.authors}
                </Row>
              </Card.Header>
              <Container>
              <Card.Img
                variant="top"
                alt="book"
                src={book.volumeInfo.imageLinks === undefined
                    ? "http://lgimages.s3.amazonaws.com/nc-md.gif"
                    : book.volumeInfo.imageLinks.thumbnail
                }
              />
              </Container>
              <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>
                {book.volumeInfo.description}
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  id={book.id}
                  onClick={() => window.open(book.volumeInfo.previewLink)}
                >
                  More Info
                </Button>
                <Button
                  variant="outline-success"
                  id={book.id}
                  onClick={(event) => {
                    const bookID = event.target.id;
                    const book = props.results.find(
                      (book) => book.id === bookID
                    );
                    console.log(book);
                    API.saveBook({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.thumbnail,
                      link: book.volumeInfo.previewLink,
                    })
                      .then(() => {
                        alert(`${book.volumeInfo.title} book saved`);
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  Save Book
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p/>
        )}
      </Container>
    </Jumbotron>
  );
}
export default Results;
