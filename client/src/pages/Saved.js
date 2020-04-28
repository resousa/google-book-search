import React from "react";
import API from "../utils/API";
import SavedJumbotron from "../components/SavedJumbotron";
class Saved extends React.Component {
  state = {
    bookList: [],
  };
  
  componentDidMount() {
    this.savedBook();
  }

  savedBook = () => {
    API.getBooks()
      .then((res) =>
        this.setState({
          bookList: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.savedBook())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <SavedJumbotron
        saved={this.state.bookList}
        deleteBook={this.deleteBook}
      />
    );
  }
}
export default Saved;
