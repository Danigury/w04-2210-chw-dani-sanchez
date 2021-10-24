import "bootstrap/dist/css/bootstrap.min.css";
import Context from "../Context/Context";
import { useContext, useState } from "react";

const FormTwo = () => {
  const { nextPage, previousPage, userData, onChange } = useContext(Context);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.password === userData.repeatPassword) {
      nextPage();
    } else {
      setError(true);
    }
  };
  const previousOnClick = () => {
    previousPage();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Create your Username</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          value={userData.username}
          id="username"
          className="form-control"
          placeholder="UserName"
          autoComplete="off"
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <input
          type="password"
          value={userData.password}
          className="form-control"
          id="password"
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="repeatPassword" className="col-sm-2 col-form-label">
          Repeat Password
        </label>
        <input
          type="password"
          value={userData.repeatPassword}
          className="form-control"
          id="repeatPassword"
          onChange={onChange}
          required
        />
      </div>
      {error ? <p>Password must be the same</p> : ""}

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
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </form>
  );
};

export default FormTwo;
