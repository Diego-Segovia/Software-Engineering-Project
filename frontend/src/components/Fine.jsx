import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Alert } from 'react-bootstrap';

const FineCard = ({ initialFineAmount, initialFineCount }) => {
  console.log("initialFineAmount:", initialFineAmount);
  const [fineAmount, setFineAmount] = useState(initialFineAmount);
  const [fineCount, setFineCount] = useState(initialFineCount);
  const [showForm, setShowForm] = useState(false);
  const [formFields, setFormFields] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  
  const [error, setError] = useState(null);

  useEffect(() => {
    setFineAmount(initialFineAmount);
    setFineCount(initialFineCount);
  }, [initialFineAmount, initialFineCount]);


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
    setFineCount(0);
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
        <Card.Title>Fines</Card.Title>
        <Card.Text>
            <span className="me-3">
                Fine Count: <span className="border border-dark px-2">{fineCount}</span>
            </span>
            <span>
                Amount: <span className="border border-dark px-2">${fineAmount.toFixed(2)}</span>
            </span>
        </Card.Text>
        {fineAmount > 0 && (
          <>
          {!showForm ?   <button className='btn btn-danger' onClick={() => {setShowForm(!showForm)}}>Expand</button> : '' }
           
            {showForm && (
              <>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group className='mt-3'>
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
                  <Button variant="success" className="mt-3" onClick={handlePayFine}>
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