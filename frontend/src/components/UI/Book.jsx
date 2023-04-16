import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "14rem" }} className="m-1 p-0">
      <Card.Img
        className="rounded"
        variant="top"
        src="https://m.media-amazon.com/images/P/0393609391.01._SCLZZZZZZZ_SX500_.jpg"
      />
    </Card>
  );
}

export default BasicExample;
