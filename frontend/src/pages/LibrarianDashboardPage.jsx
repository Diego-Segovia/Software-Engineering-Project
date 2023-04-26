import React, {useState, useEffect} from "react";
import { Button, Modal, Form, Col, Tabs, Tab } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import TableComponent from "../components/TableComponent";

function LibrarianDashboardPage() {
	
	//Test Data, Delete Later
	const data = [
	{
		"ISBN": 1,
		"Title" : "Test Title",
		"Author" : "Some Dude",
		"Publisher" : "LMS",
		"Description" : "Test Description",
		"Copies" : 1
	},
	{
		"ISBN": 2,
		"Title" : "Test Title",
		"Author" : "Some Dude",
		"Publisher" : "LMS",
		"Description" : "Test Description",
		"Copies" : 1
	},
	{
		"ISBN": 3,
		"Title" : "Test Title",
		"Author" : "Some Dude",
		"Publisher" : "LMS",
		"Description" : "Test Description",
		"Copies" : 1
	},
	{
		"ISBN": 4,
		"Title" : "Test Title",
		"Author" : "Some Dude",
		"Publisher" : "LMS",
		"Description" : "Test Description",
		"Copies" : 1
	},
	{
		"ISBN": 5,
		"Title" : "Test Title",
		"Author" : "Some Dude",
		"Publisher" : "LMS",
		"Description" : "Test Description",
		"Copies" : 1
	}
	]
	
	const books = [
	{
		"ISBN" : "4", 
		"bookTitle" : "Some Title", 
		"publisherID" : 1, 
		"genreID" : 1, 
		"numCopies": 1, 
		"bookImage" : "book.jpg"
	},
	{
		"ISBN" : "4", 
		"bookTitle" : "Some Title", 
		"publisherID" : 1, 
		"genreID" : 1, 
		"numCopies": 1, 
		"bookImage" : "book.jpg"
	},
	{
		"ISBN" : "4", 
		"bookTitle" : "Some Title", 
		"publisherID" : 1, 
		"genreID" : 1, 
		"numCopies": 1, 
		"bookImage" : "book.jpg"
	},
	{
		"ISBN" : "4", 
		"bookTitle" : "Some Title", 
		"publisherID" : 1, 
		"genreID" : 1, 
		"numCopies": 1, 
		"bookImage" : "book.jpg"
	},
	]
	
	const users = [
	{
		"UserID": 1,
		"Last Name": "Martinez",
		"First Name" : "Carlos",
		"Email" : "example@mail.com"
	},
	]
	
	const requests = [
	{
		"UserID": 1,
		"Last Name": "Martinez",
		"First Name" : "Carlos",
		"Book" : "Title",
		"Status" : "Pending"
	},
	]
	
	const loans = [
	{
		"UserID": 1,
		"Last Name": "Martinez",
		"First Name" : "Carlos",
		"Return Date" : "mm/dd/yyyy",
		"Fine Amount" : "$0.00",
		"Status" : "Loaned"
	},
	]

	//Modals
	const [addShow, addSetShow] = useState(false);
	const addHandleClose = () => addSetShow(false);
	const addHandleShow = () => addSetShow(true);
	
	const [editShow, editSetShow] = useState(false);
	const editHandleClose = () => editSetShow(false);
	const editHandleShow = () => editSetShow(true);
	
	//Book Section
	const [book, setBook] = useState([])
	
	
	const [addBook, setAddBook] = useState({
		ISBN : "", 
		bookTitle: "", 
		publisherID: 0, 
		genreID: 0, 
		numCopies: 0, 
		bookImage: ""
	})
	
	const [editBookID, setBookID] = useState(null)
	
	const [editBookData, setEditBookData] = useState({
		ISBN : "", 
		bookTitle: "", 
		publisherID: 0, 
		genreID: 0, 
		numCopies: 0, 
		bookImage: ""
	})
	
	const handleAddPost = (e) => {
		e.preventDefault()

		const newBook = {
			ISBN : addBook.ISBN, 
			bookTitle: addBook.bookTitle, 
			publisherID: addBook.publisherID, 
			genreID: addBook.genreID, 
			numCopies: addBook.numCopies, 
			bookImage: addBook.bookImage
		}

		const newBooks = [...books, newBook]
		setBooks(newBooks)
	}
	
	
	
	return (
		<div className="LibrarianDashboard">
			
			<Tabs
			  defaultActiveKey="catalog"
			  id="tabs"
			  className="mb-3"
			>
			<Tab eventKey="catalog" title="Catalog">			{/* Catalog Section*/}
				<SearchBar/>
			
				<div className="Options text-center">
					<Button className="me-2" onClick={addHandleShow}>Add</Button>
					<Button className="me-2" onClick={editHandleShow}>Edit</Button>
					<Button className="me-2 btn-danger">Delete</Button>
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
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Title</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Author</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Publisher</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Genre</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Image Link</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Number Of Copies</Form.Label>
						  <Form.Control/>
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
				
				{/* Edit Book Modal */}
				<Modal show={editShow} onHide={editHandleClose}>
					<Modal.Header closeButton>
					  <Modal.Title>Edit Book</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					
					<Form>
						<Form.Group className="mb-1">
						  <Form.Label>ISBN</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Title</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Author</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Publisher</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Genre</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Image Link</Form.Label>
						  <Form.Control/>
						</Form.Group>
						<Form.Group className="mb-1">
						  <Form.Label>Number Of Copies</Form.Label>
						  <Form.Control/>
						</Form.Group>
					</Form>
					
					</Modal.Body>
					<Modal.Footer>
					  <Button variant="secondary" onClick={editHandleClose}>
						Close
					  </Button>
					  <Button variant="primary" onClick={editHandleClose}>
						Save
					  </Button>
					</Modal.Footer>
				</Modal>
				
				<TableComponent data = {data}/>
			  </Tab>
			<Tab eventKey="users" title="Users">			{/* Users Section*/}
				<SearchBar/>
			
				<div className="Options text-center">
					<Button className="me-2 btn-danger">Delete</Button>
				</div>
				
				<TableComponent data = {users}/>
			</Tab>
			<Tab eventKey="requests" title="Requests">			{/* Requests Section*/}
				<SearchBar/>
			
				<div className="Options text-center">
					<Button className="me-2 btn-danger">Delete</Button>
				</div>
				
				<TableComponent data = {requests}/>
			</Tab>
			<Tab eventKey="loans" title="Loans">			{/* Loans Section*/}
				<SearchBar/>
			
				<div className="Options text-center">
					<Button className="me-2 btn-danger">Delete</Button>
				</div>
				
				<TableComponent data = {loans}/>
			</Tab>
			</Tabs>
			
			
		</div>
	);
}
export default LibrarianDashboardPage;
