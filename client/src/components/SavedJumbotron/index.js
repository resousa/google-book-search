import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function SavedBooks(props) {
  return (
    <Jumbotron>
      <Container>
        {props.saved.length > 0 ? (
          props.saved.map((book) => (
            <Card key={book.id}>
              <Card.Header>
                <Row>
                  <h5>{book.title} </h5>
                </Row>
                <Row>By: {book.authors}</Row>
              </Card.Header>
              <Container>
                <Card.Img variant="top" alt="book" src={book.image} />
              </Container>
              <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Button
                  variant="outline-secondary"
                  id={book.id}
                  onClick={() => window.open(book.link)}
                >
                  More Info
                </Button>
                <Button
                  variant="outline-danger"
                  type="button"
                  id={book._id}
                  onClick={(event) => {
                    props.deleteBook(event.target.id);
                  }}
                >
                  Remove Book
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="lead" id="noResults">
            Save books to view
          </p>
        )}
      </Container>
    </Jumbotron>
  );
}
export default SavedBooks;
