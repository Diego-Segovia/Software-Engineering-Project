function Book(props) {
  const book = props.bookInfo;
  return (
    <>
      <div className="card" style={{ width: "14rem", height: "22rem" }}>
        <img
          className="card-img-top rounded h-100"
          src={book.coverImg}
          alt="Card image cap"
        ></img>
      </div>
    </>
  );
}

export default Book;
