function Jumbotron() {
  return (
    <>
      <div
        className="p-5 mb-4 bg-light"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/banner-with-open-book-turning-pages-intelligence-wisdom-education-concept-copy-space_361816-6168.jpg?w=1380)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid py-4">
          <h1 className="display-5 fw-bold">LibraSphere</h1>
          <p className="col-md-6 fs-4">
            An innovative library management system designed to streamline book
            circulation, cataloging, and member management. Our user-friendly
            interface connects readers and resources, creating a seamless
            literary experience for both librarians and patrons.
          </p>
        </div>
      </div>
    </>
  );
}
export default Jumbotron;
