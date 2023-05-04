import { useState, useRef } from "react";
import { createUser } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const LibrarianSignUp = () => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const authusernameRef = useRef();
  const authpasswordRef = useRef();

  const navigateTo = useNavigate();

  const [userimage] = useState(
    "https://cdn-icons-png.flaticon.com/512/2994/2994959.png"
  );
  const [userrole] = useState("Librarian");

  // Hold visibility state for loan alert
  const [visible, setVisible] = useState(false);

  // Hold success state for loan alert
  const [wasSuccessful, setWasSuccessful] = useState(false);

  // Dismiss alert
  const handleClose = () => setVisible(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      authusername: authusernameRef.current.value,
      authpassword: authpasswordRef.current.value,
      userimage,
      userrole,
    };

    //Create User in database
    const wasUserCreated = await createUser(formData);

    // Set the visibility state for alert to true
    setVisible(true);

    // Update the success state with the result of the loan request
    setWasSuccessful(wasUserCreated);
    if (wasUserCreated) {
      setTimeout(() => {
        navigateTo("/");
      }, 2000);
    }
  };

  return (
    <div className="container mx-atuo mt-5">
      <div className="card w-50 mx-auto">
        <h2 className="mx-auto pt-2">Librarian Sign Up</h2>
        <form onSubmit={handleSubmit} className="container mt-5 mb-3">
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              ref={firstnameRef}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              ref={lastnameRef}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authusername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="authusername"
              name="authusername"
              ref={authusernameRef}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authpassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="authpassword"
              name="authpassword"
              ref={authpasswordRef}
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

export default LibrarianSignUp;
