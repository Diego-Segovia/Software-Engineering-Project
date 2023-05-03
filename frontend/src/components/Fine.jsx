import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Alert } from 'react-bootstrap';

const FineCard = ({ initialFineAmount }) => {
  console.log("initialFineAmount:", initialFineAmount);
  const [fineAmount, setFineAmount] = useState(initialFineAmount);
  const [showForm, setShowForm] = useState(false);
  const [formFields, setFormFields] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handlePayFine = () => {
    const { nameOnCard, cardNumber, expirationDate, cvv } = formFields;
    if (!nameOnCard || !cardNumber || !expirationDate || !cvv) {
      setError('Card information is missing!');
      return;
    }

    // Reset fields and fine amount
    setError(null);
    setFineAmount(0);
    setFormFields({
      nameOnCard: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
    setShowForm(false);
  };

  const handleClose = () => {
    setError(null);
    setFormFields({
      nameOnCard: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
    setShowForm(false);
  };

  return (
    <Card className="mx-3" style={{ backgroundColor: '#f0f0f0', width: '100%' }}>
      <Card.Body>
        <Card.Title>Fine</Card.Title>
        <Card.Text>
          Amount: <span className="border border-dark px-2">${fineAmount.toFixed(2)}</span>
        </Card.Text>
        {fineAmount > 0 && (
          <>
            <Button variant="link" onClick={() => setShowForm(!showForm)} style={{marginTop: "-1vh"}}>
              {showForm ? '' : 'Pay Fine'}
            </Button>
            {showForm && (
              <>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group style={{marginTop: "-3vh"}}>
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control
                      type="text"
                      name="nameOnCard"
                      value={formFields.nameOnCard}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group style={{marginTop: "1vh"}}>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="cardNumber"
                      value={formFields.cardNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group style={{marginTop: "1vh"}}>
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control
                          type="text"
                          name="expirationDate"
                          value={formFields.expirationDate}
                          onChange={handleChange}
                          placeholder="MM/DD/YR"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group style={{marginTop: "1vh"}}>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          name="cvv"
                          value={formFields.cvv}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-3" onClick={handlePayFine}>
                    Pay Fine
                  </Button>
                  <Button variant="secondary" className="mt-3 ms-3" onClick={handleClose}>
                    Close
                  </Button>
                </Form>
              </>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default FineCard;
