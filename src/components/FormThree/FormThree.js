import "bootstrap/dist/css/bootstrap.min.css";
import Context from "../Context/Context";
import { useContext, useState } from "react";
import UserDetails from "../UserDetails/UserDetails";

const FormThree = () => {
  const { previousPage, userData, onChange } = useContext(Context);
  const [error, setError] = useState(false);
  const previousOnClick = () => {
    previousPage();
  };

  const [showingDetails, setShowingDetails] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      userData.username === userData.loginUsername &&
      userData.password === userData.loginPassword
    ) {
      setShowingDetails(true);
    } else {
      setError(true);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="loginUsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          value={userData.loginUsername}
          id="loginUsername"
          className="form-control"
          placeholder="Username"
          autoComplete="off"
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="loginPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <input
          type="password"
          value={userData.passwordLogin}
          className="form-control"
          id="loginPassword"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember password
        </label>
      </div>
      {error ? <p>Username or Password are incorrect</p> : ""}
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline-primary d-block w-10 m-2"
      />
      <input
        type="button"
        value="Previous"
        className="btn btn-outline-secondary d-block w-10 m-2"
        onClick={previousOnClick}
      />
      {showingDetails ? <UserDetails /> : ""}
    </form>
  );
};

export default FormThree;
