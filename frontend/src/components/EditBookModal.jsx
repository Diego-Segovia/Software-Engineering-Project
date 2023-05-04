import { Modal, Form, Button } from "react-bootstrap";

function EditBookModal({ onClose, show }) {
  if (!show) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
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
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditBookModal;
