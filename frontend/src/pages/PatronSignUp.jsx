import { useState } from "react";
import { createUser } from "../utils/utils";

const PatronSignUp = () => {
  const [formData, setFormData] = useState({
    firstname: null,
    lastname: null,
    authusername: null,
    authpassword: null,
    userimage: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    userrole: "Library_Patron",
  });

  // Hold visibility state for loan alert
  const [visible, setVisible] = useState(false);

  // Hold success state for loan alert
  const [wasSuccessful, setWasSuccessful] = useState(false);

  // Dismiss alert
  const handleClose = () => setVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Create User in database
    const wasUserCreated = await createUser();

    // Set the visibility state for alert to true
    setVisible(true);

    // Update the success state with the result of the loan request
    setWasSuccessful(wasUserCreated);
  };

  return (
    <div className="container mx-atuo mt-5">
      <div className="card w-50 mx-auto">
        <h2 className="mx-auto pt-2">Patron Sign Up</h2>
        <form onSubmit={handleSubmit} className="container mt-5 mb-3">
          <div className="mb-3">
            <label for="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label for="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label for="authusername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="authusername"
              name="authusername"
              value={formData.authusername}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label for="authpassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="authpassword"
              name="authpassword"
              value={formData.authpassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-end row px-5">
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          {visible && (
            <div class="d-flex justify-content-center align-items-center center-wrapper">
              <div
                className={`alert ${
                  wasSuccessful ? "alert-success" : "alert-danger"
                } alert-dismissible fade show`}
                role="alert"
              >
                {wasSuccessful ? "User Created" : "Try Again!"}
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PatronSignUp;
