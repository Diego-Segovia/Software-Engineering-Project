import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Tabs, Tab } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import TableComponent from "../components/TableComponent";
import { fetchPatrons, getLoans, fetchBooks } from "../utils/utils";

function LibrarianDashboardPage() {
  const [patrons, setPatrons] = useState();
  const [loans, setLoans] = useState();
  const [checkoutRequests, setCheckoutRequests] = useState();
  const [books, setBooks] = useState();

  //Modals
  const [addShow, addSetShow] = useState(false);
  const addHandleClose = () => addSetShow(false);
  const addHandleShow = () => addSetShow(true);

  const [editShow, editSetShow] = useState(false);
  const editHandleClose = () => editSetShow(false);
  const editHandleShow = () => editSetShow(true);

  useEffect(() => {
    fetchPatrons(setPatrons);
  }, [fetchPatrons]);

  useEffect(() => {
    getLoans(setLoans, setCheckoutRequests);
  }, [getLoans]);

  useEffect(() => {
    fetchBooks(setBooks, true);
  }, [fetchBooks]);

  const onPatronRefreshHandler = () => fetchPatrons(setPatrons);
  const onLoanRefreshHandler = () => getLoans(setLoans, setCheckoutRequests);
  const onCatalogRefreshHandler = () => fetchBooks(setBooks, true);

  //Book Section

  const [addBook, setAddBook] = useState({
    ISBN: "",
    bookTitle: "",
    publisherID: 0,
    genreID: 0,
    numCopies: 0,
    bookImage: "",
  });

  const [editBookID, setBookID] = useState(null);

  const [editBookData, setEditBookData] = useState({
    ISBN: "",
    bookTitle: "",
    publisherID: 0,
    genreID: 0,
    numCopies: 0,
    bookImage: "",
  });

  const handleAddPost = (e) => {
    e.preventDefault();

    const newBook = {
      ISBN: addBook.ISBN,
      bookTitle: addBook.bookTitle,
      publisherID: addBook.publisherID,
      genreID: addBook.genreID,
      numCopies: addBook.numCopies,
      bookImage: addBook.bookImage,
    };

    const newBooks = [...books, newBook];
    setBooks(newBooks);
  };

  if (!patrons || !loans || !checkoutRequests || !books) return <div></div>;

  return (
    <div className="LibrarianDashboard">
      <Tabs defaultActiveKey="catalog" id="tabs" className="mb-3">
        <Tab eventKey="catalog" title="Catalog">
          {" "}
          {/* Catalog Section*/}
          <SearchBar />
          <div className="Options text-center">
            <Button
              className="me-2 btn-primary"
              onClick={onCatalogRefreshHandler}
            >
              Refresh
            </Button>
            <Button className="me-2 btn-success" onClick={addHandleShow}>
              Add
            </Button>
          </div>
          {/* Add Book Modal */}
          <Modal show={addShow} onHide={addHandleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-1">
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Author</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Image Link</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Number Of Copies</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={addHandleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addHandleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
          <TableComponent data={books} isBook={true} />
        </Tab>
        <Tab eventKey="users" title="Users">
          {" "}
          {/* Users Section*/}
          <SearchBar />
          <div className="Options text-center">
            <Button
              className="me-2 btn-primary"
              onClick={onPatronRefreshHandler}
            >
              Refresh
            </Button>
          </div>
          <TableComponent data={patrons} />
        </Tab>
        <Tab eventKey="requests" title="Requests">
          {" "}
          {/* Requests Section*/}
          <SearchBar />
          <div className="mt-4">
            <TableComponent
              data={checkoutRequests}
              isRequest={true}
              refreshLoans={onLoanRefreshHandler}
            />
          </div>
        </Tab>
        <Tab eventKey="loans" title="Loans">
          {" "}
          {/* Loans Section*/}
          <SearchBar />
          <div className="mt-4">
            <TableComponent data={loans} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default LibrarianDashboardPage;
