import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm({ name, value, handleInputChange, bookSearch }) {
  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Search a book title"
          name={name}
          value={value}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          Search results from Google Books.
        </Form.Text>
      </Form.Group>
      <Button variant="secondary" type="submit" onClick={bookSearch}>
        Search
      </Button>
    </Form>
  );
}
export default SearchForm;
