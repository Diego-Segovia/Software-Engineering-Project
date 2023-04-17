function DetailedBook() {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "700px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://m.media-amazon.com/images/I/41i6RKW1IXL._SX314_BO1,204,203,200_.jpg"
              className="img-fluid rounded-start h-100"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                The Devil in the White City: Murder, Magic, and Madness at the
                Fair That Changed America
              </h5>
              <p>by Erik Larson</p>
              <p className="card-text">
                "The Devil in the White City" by Erik Larson is a non-fiction
                book that tells the story of two parallel events: the 1893
                World's Columbian Exposition in Chicago and the murderous
                activities of H.H. Holmes, one of America's most notorious
                serial killers. The book weaves together the history of the fair
                and the story of Holmes, detailing how the two events were
                intertwined in ways that few people realized at the time.
                Through Larson's vivid storytelling, readers are transported to
                the Gilded Age and witness the awe-inspiring spectacle of the
                fair and the chilling deeds of a psychopath.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailedBook;
