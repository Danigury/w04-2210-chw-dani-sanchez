import "bootstrap/dist/css/bootstrap.min.css";
import Context from "../Context/Context";
import { useContext } from "react";

const FormTwo = () => {
  const { nextPage, previousPage, userData, onChange } = useContext(Context);

  const previousOnClick = () => {
    previousPage();
  };

  const handleSubmit = () => {
    if (userData.password !== userData.repeatPassword) {
      userData.repeatPassword = "";
    } else {
      nextPage();
    }
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
        <label htmlFor="repeat-password" className="col-sm-2 col-form-label">
          Repeat Password
        </label>
        <input
          type="repeat-password"
          value={userData.repeatPassword}
          className="form-control"
          id="repeat-password"
          onChange={onChange}
          required
        />
      </div>
      <input
        type="button"
        value="Submit"
        className="btn btn-outline-primary d-block w-10 m-2"
        onClick={previousOnClick}
      />
      <input
        type="submit"
        value="Previous"
        className="btn btn-outline-secondary d-block w-10 m-2"
      />
    </form>
  );
};

export default FormTwo;
