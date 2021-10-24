import "bootstrap/dist/css/bootstrap.min.css";

const FormThree = () => {
  return (
    <form>
      <h1>Log In</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          placeholder="Username"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
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
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline-primary d-block w-10 m-2"
        onClick={() => {}}
      />
    </form>
  );
};

export default FormThree;
